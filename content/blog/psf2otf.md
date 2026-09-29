---
title: "Implementing MATLAB's psf2otf in Python: why and how"
date: 2024-08-13
summary: "A drop-in NumPy equivalent of MATLAB's psf2otf — and why the padding and circular shift matter for deconvolution."
aliases: [/post/psf2otf/]
tags: [imaging, python]
---

The Point Spread Function (PSF) and the Optical Transfer Function (OTF) are fundamental tools in image processing and in the design and analysis of imaging systems. They describe how light from object space is transformed into an image, and let us correct for the distortions and blurring introduced by the imaging process.

The PSF describes the response of an imaging system to a point source. It represents how light from a single point in object space is distributed in the image: the blur caused by out-of-focus optics, by motion, or by diffraction at the aperture of a microscope.

The OTF is the Fourier transform of the PSF. It describes how the imaging system handles each spatial frequency. Its magnitude — the Modulation Transfer Function (MTF) — tells us how much each frequency is attenuated, and its phase how much each frequency is shifted.

In MATLAB, `psf2otf` converts a PSF into an OTF. It is used constantly in image processing, particularly for deconvolution. Here is how to write an equivalent function in Python.

## What psf2otf does

MATLAB's `psf2otf` does three things:

1. **Pads** the PSF with zeros, at the end of each axis, up to the size of the image it will be applied to.
2. **Circularly shifts** the padded PSF so that its central pixel sits at index (0, 0). This is what makes the resulting OTF correspond to a convolution centred on each pixel, rather than one offset by half the PSF width.
3. **Takes the Fourier transform** of the result.

Let's translate each step using NumPy.

### 1. Padding

```python
import numpy as np

def pad_psf_to_shape(psf, shape):
    pad_width = [(0, s - p) for s, p in zip(shape, psf.shape)]
    return np.pad(psf, pad_width, mode="constant")
```

### 2. Circular shift

The centre of a PSF of size `n` along an axis is at index `n // 2`. Rolling by `-(n // 2)` moves it to index 0.

```python
def center_psf_at_origin(psf, psf_shape):
    shift = [-(n // 2) for n in psf_shape]
    return np.roll(psf, shift, axis=tuple(range(psf.ndim)))
```

### 3. Fourier transform

```python
def compute_otf(psf):
    return np.fft.fftn(psf)
```

## Putting it together

```python
def psf2otf(psf, shape):
    """Python equivalent of MATLAB's psf2otf, for 2-D or N-D PSFs."""
    psf = np.asarray(psf, dtype=float)
    padded = pad_psf_to_shape(psf, shape)
    centered = center_psf_at_origin(padded, psf.shape)
    return compute_otf(centered)
```

A quick sanity check: the OTF of a symmetric PSF should be real (up to rounding), and its value at zero frequency should equal the sum of the PSF.

```python
psf = np.outer([1, 2, 1], [1, 2, 1]) / 16
otf = psf2otf(psf, (256, 256))
assert otf.shape == (256, 256)
assert np.allclose(otf.imag, 0)
assert np.isclose(otf[0, 0].real, psf.sum())
```

As with the MATLAB function, the PSF should usually be normalised (its sum equal to 1) before being passed in, so that deconvolution preserves the total intensity.

## Where it is used

This function can be used in Python exactly where `psf2otf` is used in MATLAB — for example in Wiener or Richardson–Lucy deconvolution, where the blurred image is divided (in Fourier space) by the OTF, with some regularisation.

The applications are vast. In astronomy, the PSF is measured on a known star and used to correct atmospheric distortion in images from ground-based telescopes. In medical imaging, such as MRI or CT, it corrects the blurring introduced by the acquisition, producing sharper images that aid diagnosis. And in fluorescence microscopy, it is the basis of every deconvolution package.

## Conclusion

The PSF and OTF are fundamental tools in the analysis of imaging systems. With a faithful Python implementation of `psf2otf`, we can use them in a Python workflow without losing the conventions that make MATLAB deconvolution code work — in particular the padding and the circular shift, which are easy to get subtly wrong.

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Pe(t,e){const n=new Float32Array(16);for(let o=0;o<4;o++)for(let s=0;s<4;s++){let r=0;for(let i=0;i<4;i++)r+=t[4*i+s]*e[4*o+i];n[4*o+s]=r}return n}function ws(t,e,n,o){const s=1/Math.tan(t/2),r=new Float32Array(16);return r[0]=s/e,r[5]=s,r[10]=o/(n-o),r[11]=-1,r[14]=n*o/(n-o),r}function Qe(t,e,n,o,s,r){const i=new Float32Array(16);return i[0]=2/(e-t),i[5]=2/(o-n),i[10]=-1/(r-s),i[12]=-0/(e-t),i[13]=-0/(o-n),i[14]=-s/(r-s),i[15]=1,i}function Ae(t,e,n){let o=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2],i=Math.hypot(o,s,r);o/=i,s/=i,r/=i;let a=n[1]*r-n[2]*s,c=n[2]*o-n[0]*r,l=n[0]*s-n[1]*o;i=Math.hypot(a,c,l),a/=i,c/=i,l/=i;const h=s*l-r*c,f=r*a-o*l,u=o*c-s*a,m=new Float32Array(16);return m[0]=a,m[4]=c,m[8]=l,m[1]=h,m[5]=f,m[9]=u,m[2]=o,m[6]=s,m[10]=r,m[12]=-(a*t[0]+c*t[1]+l*t[2]),m[13]=-(h*t[0]+f*t[1]+u*t[2]),m[14]=-(o*t[0]+s*t[1]+r*t[2]),m[15]=1,m}function Ms(t){const e=new Float32Array(16),[n,o,s,r,i,a,c,l,h,f,u,m,d,p,y,v]=t,A=n*a-o*i,w=n*c-s*i,I=n*l-r*i,z=o*c-s*a,C=o*l-r*a,E=s*l-r*c,k=h*p-f*d,b=h*y-u*d,g=h*v-m*d,P=f*y-u*p,S=f*v-m*p,V=u*v-m*y,N=1/(A*V-w*S+I*P+z*g-C*b+E*k);return e[0]=(a*V-c*S+l*P)*N,e[1]=(s*S-o*V-r*P)*N,e[2]=(p*E-y*C+v*z)*N,e[3]=(u*C-f*E-m*z)*N,e[4]=(c*g-i*V-l*b)*N,e[5]=(n*V-s*g+r*b)*N,e[6]=(y*I-d*E-v*w)*N,e[7]=(h*E-u*I+m*w)*N,e[8]=(i*S-a*g+l*k)*N,e[9]=(o*g-n*S-r*k)*N,e[10]=(d*C-p*I+v*A)*N,e[11]=(f*I-h*C-m*A)*N,e[12]=(a*b-i*P-c*k)*N,e[13]=(n*P-o*b+s*k)*N,e[14]=(p*w-d*z-y*A)*N,e[15]=(h*z-f*w+u*A)*N,e}function tn(t,e){const n=e[0],o=e[1],s=e[2],r=t[3]*n+t[7]*o+t[11]*s+t[15];return[(t[0]*n+t[4]*o+t[8]*s+t[12])/r,(t[1]*n+t[5]*o+t[9]*s+t[13])/r,(t[2]*n+t[6]*o+t[10]*s+t[14])/r]}const Mt={absorb:0,scatter:1,background:2,membrane:3,optics:4,ink:5};function qt(t){const e=parseInt(t.slice(1),16),n=[e>>16&255,e>>8&255,e&255].map(o=>{const s=o/255;return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)});return[n[0],n[1],n[2]]}function xs(t){return"#"+[t[0],t[1],t[2]].map(e=>{const n=Math.min(1,Math.max(0,e)),o=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055;return Math.round(255*o).toString(16).padStart(2,"0")}).join("")}function ks(t,e,n){const o=new Float32Array((6+e)*4),s=(r,i,a=1)=>{o.set(i,4*r),o[4*r+3]=a};s(Mt.absorb,n??t.absorb),s(Mt.scatter,qt(t.scatter),t.scatterDensity),s(Mt.background,qt(t.background)),s(Mt.membrane,qt(t.membrane),t.membraneStrength),s(Mt.optics,[t.refraction,t.emissive,t.gloss],0),s(Mt.ink,qt(t.ink));for(let r=1;r<e;r++)s(6+r,qt(t.colors[r]??t.scatter));return o}function Ps(t,e=""){const n=o=>Number.isInteger(o)?o.toFixed(1):String(o);return(e?`// ${e}
`:"")+Object.entries(t).map(([o,s])=>`const ${o} = ${n(s)};`).join(`
`)+`
`}const Wn={hookOrganelleOffset:"fn hookOrganelleOffset(pos: vec3f, nrm: vec3f, rest: vec4f, time: f32) -> vec3f { return vec3f(0.0); }",hookOrganelleHidden:"fn hookOrganelleHidden(mat: f32, coord: f32, rest: vec3f) -> bool { return false; }",hookOrganelleSurface:"fn hookOrganelleSurface(base: vec3f, mat: f32, coord: f32, rest: vec3f) -> vec3f { return base; }",hookOrganelleGlow:"fn hookOrganelleGlow(base: vec3f, N: vec3f, V: vec3f, mat: f32) -> vec3f { return defaultGlow(base, N, V); }",hookOrganelleFinish:"fn hookOrganelleFinish(c: vec3f, N: vec3f, V: vec3f, mat: f32, emissive: f32) -> vec3f { return c; }",hookSectionOpacity:"fn hookSectionOpacity(mat: f32) -> f32 { if (abs(mat - WALL_MAT) < 0.5) { return 0.8; } return 0.9; }"},As=Object.keys(Wn);function Ss(t){const e=t.organelleWgsl??"",n=As.filter(o=>!new RegExp(`fn\\s+${o}\\s*\\(`).test(e)).map(o=>Wn[o]);return(t.constantsWgsl??"")+`
const MATERIAL_SLOTS = ${t.materialSlots}u;
`+Ps({WALL_MAT:t.wallMaterial,SCAR_MAT:t.scarMaterial})+e+`
`+n.join(`
`)+`
`}const Ts=`// Shared uniforms, primitive SDFs (mirroring sdf/primitives.ts) and lighting.
// Preceded by the prelude (render/wgsl.ts): app constants, MATERIAL_SLOTS, WALL_MAT, SCAR_MAT and the hooks.

struct Frame {
  viewProj: mat4x4f,
  view: mat4x4f,
  lightViewProj: mat4x4f,
  floorViewProj: mat4x4f,
  camPos: vec4f,
  lightDir: vec4f,   // unit vector toward the key light
  screen: vec4f,     // width, height, 1/width, 1/height
  proj: vec4f,       // P[2][2], P[3][2], near, far
  params: vec4f,     // time, organelle count, highlighted material (-1 none), hidden-material bitmask
  palette: array<vec4f, 6>,
  mats: array<vec4f, MATERIAL_SLOTS>,
};
// palette: 0 absorb | 1 scatter (w density) | 2 background | 3 membrane (w strength)
//          4 (refraction, emissive, gloss, view: 0 anatomy 1 deformation) | 5 ink.   mats[m] = colour of material m.

// k = wall thickness, body part count, app[0], app[1]; m = app[2..5] (values the app's hooks read)
struct Cell { k: vec4f, m: vec4f };
struct Prim { h: vec4f, a: vec4f, b: vec4f };      // h = kind, material, R, r; a.w = op; b.w = blend
struct PieceU { planes: array<vec4f, 8>, info: vec4f };  // info.x = plane count

@group(0) @binding(0) var<uniform> F: Frame;
@group(0) @binding(1) var<uniform> cell: Cell;
@group(0) @binding(2) var<storage, read> prims: array<Prim>;

const PI = 3.14159265;

fn ellipsoidSdf(p: vec3f, c: vec3f, r: vec3f) -> f32 {
  let q = p - c;
  let k0 = length(q / r);
  let k1 = length(q / (r * r));
  if (k1 < 1e-6) { return -min(r.x, min(r.y, r.z)); }
  return k0 * (k0 - 1.0) / k1;
}

fn sminPoly(a: f32, b: f32, k: f32) -> f32 {
  let h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

fn primSdf(i: u32, p: vec3f) -> f32 {
  let pr = prims[i];
  let kind = u32(pr.h.x + 0.5);
  if (kind == 0u) { return ellipsoidSdf(p, pr.a.xyz, pr.b.xyz); }
  if (kind == 1u) {
    let ba = pr.b.xyz - pr.a.xyz;
    let pa = p - pr.a.xyz;
    let h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h) - pr.h.w;
  }
  if (kind == 3u) {
    let ba = pr.b.xyz - pr.a.xyz;
    let pa = p - pr.a.xyz;
    let h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h) - mix(pr.h.z, pr.h.w, h);
  }
  if (kind == 4u) {
    // a flat washer: |b| is the half-thickness, b/|b| the axis, R outer and r inner radius
    let ht = max(length(pr.b.xyz), 1e-9);
    let u = pr.b.xyz / ht;
    let q = p - pr.a.xyz;
    let h = dot(q, u);
    let rad = length(q - h * u);
    var dx = rad - pr.h.z;
    if (pr.h.w > 0.0) { dx = max(dx, pr.h.w - rad); }
    let d = vec2f(dx, abs(h) - ht);
    return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
  }
  if (kind == 5u) {
    // a curved sheet: the part of a spherical shell within the half-angle of the axis; |b| is the sine of that angle
    let s = max(min(length(pr.b.xyz), 1.0), 1e-9);
    let c = sqrt(1.0 - s * s);
    let q = p - pr.a.xyz;
    let h = dot(q, pr.b.xyz) / s;
    let len = length(q);
    let w = sqrt(max(len * len - h * h, 0.0));
    if (c * w < s * h) { return abs(len - pr.h.z) - pr.h.w; }
    return length(vec2f(w - pr.h.z * s, h - pr.h.z * c)) - pr.h.w;
  }
  let q = p - pr.a.xyz;
  let h = dot(q, pr.b.xyz);
  let radial = length(q - h * pr.b.xyz);
  return length(vec2f(radial - pr.h.z, h)) - pr.h.w;
}

fn smaxPoly(a: f32, b: f32, k: f32) -> f32 { return -sminPoly(-a, -b, k); }

fn bodyCount() -> u32 { return u32(cell.k.y + 0.5); }

/**
 * The body: parts combined in order by smooth union (a.w = 0) or subtraction (a.w = 1).
 * A morph part (a.w = 2) closes body A and starts body B; the result is mix(A, B, t), t = b.w.
 */
fn cellSdf(p: vec3f) -> f32 {
  var d = primSdf(0u, p);
  var dA = 0.0;
  var t = -1.0;
  let n = bodyCount();
  for (var i = 1u; i < n; i++) {
    let q = primSdf(i, p);
    let op = prims[i].a.w;
    let k = max(prims[i].b.w, 1e-4);
    if (op > 1.5) { dA = d; t = prims[i].b.w; d = q; }
    else if (op < 0.5) { d = sminPoly(d, q, k); } else { d = smaxPoly(d, -q, k); }
  }
  if (t < 0.0) { return d; }
  return mix(dA, d, t);
}

fn isHidden(m: f32) -> bool { return ((u32(F.params.w + 0.5) >> u32(m + 0.5)) & 1u) == 1u; }
fn highlight() -> f32 { return F.params.z; }

fn organelleCount() -> u32 { return u32(F.params.y + 0.5); }

/** Material under a rest-space point and its distance to the nearest visible membrane. */
fn sectionAt(p: vec3f) -> vec2f {
  let wall = cell.k.x;
  let cs = cellSdf(p);
  var edge = 1e3;
  var mat = 0.0;
  var found = false;
  if (!isHidden(WALL_MAT)) {
    edge = abs(cs + wall);
    if (cs > -wall) { mat = WALL_MAT; found = true; }
  }
  let b0 = bodyCount();
  let n = b0 + organelleCount();
  for (var i = b0; i < n; i++) {
    let m = prims[i].h.y;
    if (isHidden(m)) { continue; }
    let d = primSdf(i, p);
    if (SCAR_MAT >= 0.0 && abs(m - SCAR_MAT) < 0.5) {
      // scars: thickened rings within the wall
      if (found && mat == WALL_MAT && d < 0.04) { mat = SCAR_MAT; }
      continue;
    }
    edge = min(edge, abs(d));
    if (!found && d < 0.0) { mat = m; found = true; }
  }
  return vec2f(mat, edge);
}

/** How strongly a point on the outer skin lies on a scar ring. */
fn budScarAt(p: vec3f) -> f32 {
  if (SCAR_MAT < 0.0 || isHidden(SCAR_MAT)) { return 0.0; }
  var s = 0.0;
  let b0 = bodyCount();
  let n = b0 + organelleCount();
  for (var i = b0; i < n; i++) {
    let m = prims[i].h.y;
    if (abs(m - SCAR_MAT) >= 0.5) { continue; }
    s = max(s, 1.0 - smoothstep(0.0, 0.06, primSdf(i, p)));
  }
  return s;
}

fn materialColor(m: f32) -> vec3f {
  let i = u32(m + 0.5);
  if (i == 0u) { return F.palette[1].rgb; }
  return F.mats[i].rgb;
}

fn linearDepth(d: f32) -> f32 { return F.proj.y / (d + F.proj.x); }

/** A soft studio: warm backdrop, an overhead softbox toward the key light and a cool strip behind. */
fn studio(d: vec3f) -> vec3f {
  let bg = F.palette[2].rgb;
  var c = mix(bg * 0.7, bg * 1.05, smoothstep(-0.3, 0.7, d.y));
  let L = F.lightDir.xyz;
  c += vec3f(1.9, 1.85, 1.75) * smoothstep(0.88, 0.97, dot(d, L));
  let strip = normalize(vec3f(0.75, 0.35, -0.55));
  c += vec3f(0.7, 0.8, 0.95) * smoothstep(0.93, 0.985, dot(d, strip));
  return c;
}

fn ggx(N: vec3f, V: vec3f, L: vec3f, rough: f32) -> f32 {
  let H = normalize(V + L);
  let a = rough * rough;
  let a2 = a * a;
  let nh = max(dot(N, H), 0.0);
  let dd = nh * nh * (a2 - 1.0) + 1.0;
  let D = a2 / (PI * dd * dd);
  let nl = max(dot(N, L), 0.0);
  let nv = max(dot(N, V), 1e-3);
  let k = a * 0.5;
  let G = nl / (nl * (1.0 - k) + k) * nv / (nv * (1.0 - k) + k);
  return D * G / (4.0 * nv);
}

fn fresnel(cosT: f32, f0: f32) -> f32 { return f0 + (1.0 - f0) * pow(1.0 - clamp(cosT, 0.0, 1.0), 5.0); }

fn viewMode() -> f32 { return F.palette[4].w; }

/** An organelle seen by its own light (fluorescence): brightest face-on. */
fn defaultGlow(base: vec3f, N: vec3f, V: vec3f) -> vec3f { return base * (0.9 + 0.6 * pow(max(dot(N, V), 0.0), 2.0)); }

/** Viridis (Mattz's polynomial fit), returned in linear colour. */
fn viridis(t0: f32) -> vec3f {
  let t = clamp(t0, 0.0, 1.0);
  let c0 = vec3f(0.2777273272234177, 0.005407344544966578, 0.3340998053353061);
  let c1 = vec3f(0.1050930431085774, 1.404613529898575, 1.384590162594685);
  let c2 = vec3f(-0.3308618287255563, 0.214847559468213, 0.09509516302823659);
  let c3 = vec3f(-4.634230498983486, -5.799100973351585, -19.33244095627987);
  let c4 = vec3f(6.228269936347081, 14.17993336680509, 56.69055260068105);
  let c5 = vec3f(4.776384997670288, -13.74514537774601, -65.35303263337234);
  let c6 = vec3f(-5.435455855934631, 4.645852612178535, 26.3124352495832);
  let srgb = c0 + t * (c1 + t * (c2 + t * (c3 + t * (c4 + t * (c5 + t * c6)))));
  return pow(clamp(srgb, vec3f(0.0), vec3f(1.0)), vec3f(2.2));
}
`,Rs=`@group(1) @binding(0) var shadowMap: texture_depth_2d;
@group(1) @binding(1) var shadowCmp: sampler_comparison;
@group(1) @binding(2) var floorMap: texture_depth_2d;

/** Height range of the bottom-up floor map (see renderer: camera at y = -FLOOR_BELOW looking up). */
const FLOOR_BELOW = 0.5;
const FLOOR_RANGE = 20.0;

fn shadowAt(world: vec3f, soft: f32) -> f32 {
  let lp = F.lightViewProj * vec4f(world, 1.0);
  let uv = lp.xy * vec2f(0.5, -0.5) + 0.5;
  if (any(uv < vec2f(0.0)) || any(uv > vec2f(1.0)) || lp.z > 1.0) { return 1.0; }
  let texel = 1.0 / vec2f(textureDimensions(shadowMap));
  var s = 0.0;
  for (var i = -2; i <= 2; i++) {
    for (var j = -2; j <= 2; j++) {
      s += textureSampleCompareLevel(shadowMap, shadowCmp, uv + vec2f(f32(i), f32(j)) * texel * soft, lp.z - 0.003);
    }
  }
  return s / 25.0;
}

/** Height of the lowest body surface above a floor point (large when nothing is overhead). */
fn bodyHeightAt(x: f32, z: f32) -> f32 {
  let fp = F.floorViewProj * vec4f(x, 0.0, z, 1.0);
  let uv = fp.xy * vec2f(0.5, -0.5) + 0.5;
  if (any(uv < vec2f(0.0)) || any(uv > vec2f(1.0))) { return 1e3; }
  let dims = vec2f(textureDimensions(floorMap));
  let d = textureLoad(floorMap, vec2i(uv * dims), 0);
  if (d >= 1.0) { return 1e3; }
  return d * FLOOR_RANGE - FLOOR_BELOW;
}

fn contactOcclusion(world: vec3f) -> f32 {
  var occ = 0.0;
  var wsum = 0.0;
  for (var r = 0; r < 3; r++) {
    let rad = 0.35 + f32(r) * 0.55;
    for (var k = 0; k < 8; k++) {
      let a = f32(k) * PI / 4.0 + f32(r) * 0.4;
      let h = bodyHeightAt(world.x + cos(a) * rad, world.z + sin(a) * rad);
      let w = 1.0 / (1.0 + f32(r));
      occ += w * (1.0 - smoothstep(0.0, 1.6, h));
      wsum += w;
    }
  }
  return occ / wsum;
}
`,Es=`// Depth-only passes: key-light shadow map, bottom-up floor map, jelly back faces.

struct Cam { viewProj: mat4x4f };
@group(0) @binding(0) var<uniform> cam: Cam;

@vertex fn vs(@location(0) pos: vec3f) -> @builtin(position) vec4f {
  return cam.viewProj * vec4f(pos, 1.0);
}
`,Is=`struct VOut { @builtin(position) clip: vec4f, @location(0) world: vec3f };

@vertex fn vs(@builtin(vertex_index) vi: u32) -> VOut {
  let c = array<vec2f, 4>(vec2f(-1, -1), vec2f(1, -1), vec2f(-1, 1), vec2f(1, 1));
  let p = vec3f(c[vi].x * 120.0 + F.camPos.x, 0.0, c[vi].y * 120.0 + F.camPos.z);
  var o: VOut;
  o.clip = F.viewProj * vec4f(p, 1.0);
  o.world = p;
  return o;
}

@fragment fn fs(in: VOut) -> @location(0) vec4f {
  let bg = F.palette[2].rgb;
  let sh = shadowAt(in.world, 2.2);
  let ao = contactOcclusion(in.world);
  // shadow light is tinted by the jelly it passed through
  let tint = exp(-F.palette[0].rgb * 1.2);
  let shadowCol = bg * mix(vec3f(0.62), tint * 0.8, 0.45);
  var c = mix(shadowCol, bg, sh);
  c *= 1.0 - 0.55 * ao;
  return vec4f(c, 1.0);
}
`,Cs=`// Organelles, drawn opaque inside the jelly and clipped at the piece's knife planes.
// What an organelle does beyond being lit (moving, hiding, surface detail, its own glow) comes
// from the hooks in the prelude (render/wgsl.ts), which an app may supply.

@group(2) @binding(0) var<uniform> piece: PieceU;

// coord: an app-defined per-vertex scalar (Jelly Cells: which organelle and how far along a tube).
struct VIn { @location(0) pos: vec3f, @location(1) nrm: vec3f, @location(2) rest: vec4f, @location(3) coord: f32 };
struct VOut { @builtin(position) clip: vec4f, @location(0) world: vec3f, @location(1) nrm: vec3f, @location(2) rest: vec3f, @location(3) mat: f32, @location(4) coord: f32 };

@vertex fn vs(v: VIn) -> VOut {
  var o: VOut;
  let pos = v.pos + hookOrganelleOffset(v.pos, v.nrm, v.rest, F.params.x);
  o.clip = F.viewProj * vec4f(pos, 1.0);
  o.world = pos; o.nrm = v.nrm; o.rest = v.rest.xyz; o.mat = v.rest.w; o.coord = v.coord;
  return o;
}

fn clippedAway(rest: vec3f) -> bool {
  let n = u32(piece.info.x + 0.5);
  for (var i = 0u; i < n; i++) {
    // a hair inside the knife face, so the section on the face always covers the cut organelle
    if (dot(piece.planes[i].xyz, rest) > piece.planes[i].w - 0.04) { return true; }
  }
  return false;
}

@fragment fn fs(in: VOut, @builtin(front_facing) front: bool) -> @location(0) vec4f {
  if (clippedAway(in.rest) || isHidden(in.mat) || hookOrganelleHidden(in.mat, in.coord, in.rest)) { discard; }
  var N = normalize(in.nrm);
  let V = normalize(F.camPos.xyz - in.world);
  if (dot(N, V) < 0.0) { N = -N; }
  let base = hookOrganelleSurface(materialColor(in.mat), in.mat, in.coord, in.rest);
  let L = F.lightDir.xyz;
  let emissive = F.palette[4].y;
  let sh = shadowAt(in.world, 1.2);
  let diff = (0.5 + 0.5 * dot(N, L)) * (0.55 + 0.45 * sh);
  var c = base * (0.3 + 0.8 * diff) + vec3f(ggx(N, V, L, 0.35) * 0.25 * sh);
  c = mix(c, hookOrganelleGlow(base, N, V, in.mat), emissive);
  c = hookOrganelleFinish(c, N, V, in.mat, emissive);
  // the deformation view ghosts the organelles so the jelly's colours read clearly
  if (viewMode() > 0.5) { c = mix(c, F.palette[2].rgb, 0.7); }
  // teaching highlight: the named organelle glows, everything else recedes
  let hl = highlight();
  if (hl > -0.5) {
    if (abs(in.mat - hl) < 0.5) {
      c = c * 1.15 + base * (0.35 + 0.25 * sin(F.params.x * 4.0));
    } else {
      c = mix(c, F.palette[2].rgb, 0.65);
    }
  }
  return vec4f(c, 1.0);
}
`,Fs=`// The jelly: front faces of a piece's skin. Refracts the opaque scene by the
// thickness of jelly along the view ray, absorbs it (Beer–Lambert), adds milky
// scattering, a thin-edge back glow, Fresnel reflections and GGX highlights.
// Knife faces show a stained section of whatever organelle lies in the plane.

@group(2) @binding(0) var<uniform> piece: PieceU;

@group(3) @binding(0) var sceneColor: texture_2d<f32>;
@group(3) @binding(1) var linSampler: sampler;
@group(3) @binding(2) var sceneDepth: texture_depth_2d;
@group(3) @binding(3) var backDepth: texture_depth_2d;

struct VIn { @location(0) pos: vec3f, @location(1) nrm: vec3f, @location(2) rest: vec4f, @location(3) scalar: f32 };
struct VOut {
  @builtin(position) clip: vec4f,
  @location(0) world: vec3f,
  @location(1) nrm: vec3f,
  @location(2) rest: vec3f,
  @location(3) cut: f32,
  @location(4) viewZ: f32,
  @location(5) scalar: f32,
};

@vertex fn vs(v: VIn) -> VOut {
  var o: VOut;
  o.clip = F.viewProj * vec4f(v.pos, 1.0);
  o.world = v.pos; o.nrm = v.nrm; o.rest = v.rest.xyz; o.cut = v.rest.w;
  o.viewZ = -(F.view * vec4f(v.pos, 1.0)).z;
  o.scalar = v.scalar;
  return o;
}

@fragment fn fs(in: VOut) -> @location(0) vec4f {
  let N = normalize(in.nrm);
  let V = normalize(F.camPos.xyz - in.world);
  let L = F.lightDir.xyz;
  let px = vec2i(in.clip.xy);
  let uv = in.clip.xy * F.screen.zw;
  let isCut = in.cut > 0.5;
  let emissive = F.palette[4].y;

  // Thickness of jelly behind this point, stopping at anything opaque inside it.
  let zBack = linearDepth(textureLoad(backDepth, px, 0));
  let zOpaque = linearDepth(textureLoad(sceneDepth, px, 0));
  let thick = max(0.0, min(zBack, zOpaque) - in.viewZ);
  let tRef = min(thick, 4.0);

  // Refraction: bend the view of the scene behind by the surface normal.
  let nView = (F.view * vec4f(N, 0.0)).xyz;
  // offset shrinks with distance so thin processes do not act as magnifying lenses
  var ruv = uv - nView.xy * vec2f(1.0, -1.0) * F.palette[4].x * tRef * (9.0 / max(in.viewZ, 1.0));
  ruv = clamp(ruv, vec2f(0.001), vec2f(0.999));
  // don't pull in things that sit in front of the jelly (the knife)
  let rpx = vec2i(ruv * F.screen.xy);
  if (linearDepth(textureLoad(sceneDepth, rpx, 0)) < in.viewZ) { ruv = uv; }
  let behind = textureSampleLevel(sceneColor, linSampler, ruv, 0.0).rgb;

  // Beer–Lambert absorption and milky in-scattering.
  let absorb = F.palette[0].rgb;
  let scat = F.palette[1];
  let sh = shadowAt(in.world, 1.0);
  let light = 0.55 + 0.45 * sh;
  var c = behind * exp(-absorb * thick);
  c = mix(c, scat.rgb * light, 1.0 - exp(-scat.w * thick));

  // Back-lit glow where the jelly is thin.
  let back = pow(max(dot(-L, V), 0.0), 2.0) * 0.5 + 0.25;
  c += scat.rgb * (1.0 - smoothstep(0.0, 1.4, thick)) * back * 0.35 * (1.0 - emissive);

  var rough = 0.16;
  var f0 = 0.035;
  if (isCut) {
    // A stained section through the rest-space anatomy.
    let s = sectionAt(in.rest);
    let m = s.x;
    if (m > 0.5) {
      let base = materialColor(m);
      let diff = 0.55 + 0.45 * max(dot(N, L), 0.0) * light;
      var opac = hookSectionOpacity(m);
      var lit = mix(base * diff, base * 1.25, emissive);
      let hl = highlight();
      if (hl > -0.5) {
        if (abs(m - hl) < 0.5) { lit = lit * 1.2 + base * 0.25; opac = 1.0; } else { opac *= 0.3; }
      }
      c = mix(c, lit, opac);
    }
    let mem = F.palette[3];
    let line = 1.0 - smoothstep(0.012, 0.035, s.y);
    c = mix(c, mem.rgb, line * mem.w);
    rough = 0.08;
    f0 = 0.03;
  } else {
    // The wall is a thin milky film: strongest at grazing angles.
    let nv = max(dot(N, V), 0.0);
    let film = 0.12 + 0.55 * pow(1.0 - nv, 2.0);
    if (!isHidden(WALL_MAT)) { c = mix(c, F.mats[u32(WALL_MAT)].rgb * light, film * (1.0 - 0.6 * emissive)); }
    let scar = budScarAt(in.rest);
    c = mix(c, F.mats[u32(max(SCAR_MAT, 0.0))].rgb * light, scar * 0.85);
  }

  // Deformation view: colour the jelly (and its knife faces) by its strain.
  if (viewMode() > 0.5) {
    let fc = viridis(in.scalar);
    let lit = fc * (0.55 + 0.45 * max(dot(N, L), 0.0) * (0.6 + 0.4 * sh));
    c = mix(c, lit, 0.88);
  }

  // Studio reflections and highlights.
  let nv = max(dot(N, V), 0.0);
  let fr = fresnel(nv, f0);
  c = mix(c, studio(reflect(-V, N)), fr * F.palette[4].z);
  c += vec3f(1.0, 0.98, 0.95) * ggx(N, V, L, rough) * 0.9 * sh;
  let fill = normalize(vec3f(0.7, 0.4, -0.6));
  c += vec3f(0.8, 0.85, 0.95) * ggx(N, V, fill, rough + 0.1) * 0.25;
  return vec4f(c, 1.0);
}
`,zs=`// The chef's knife. Vertices are pre-transformed on the CPU; rest.xyz are knife-local
// coordinates (x handle → tip, y up from the edge, z across the blade) and rest.w the part:
// 0 blade flat, 1 wood, 2 bolster, 3 rivet, 4 edge bevel (see KnifePart in cut/knife.ts).
struct VIn { @location(0) pos: vec3f, @location(1) nrm: vec3f, @location(2) rest: vec4f };
struct VOut { @builtin(position) clip: vec4f, @location(0) world: vec3f, @location(1) nrm: vec3f, @location(2) local: vec3f, @location(3) @interpolate(flat) part: f32 };

@vertex fn vs(v: VIn) -> VOut {
  var o: VOut;
  o.clip = F.viewProj * vec4f(v.pos, 1.0);
  o.world = v.pos; o.nrm = v.nrm; o.local = v.rest.xyz; o.part = v.rest.w;
  return o;
}

fn hash1(x: f32) -> f32 { return fract(sin(x * 127.1) * 43758.5453); }
fn hash2(p: vec2f) -> f32 { return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453); }
fn noise2(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash2(i), hash2(i + vec2f(1.0, 0.0)), u.x), mix(hash2(i + vec2f(0.0, 1.0)), hash2(i + vec2f(1.0, 1.0)), u.x), u.y);
}
fn fbm(p: vec2f) -> f32 { return 0.5 * noise2(p) + 0.3 * noise2(p * 2.3 + 7.1) + 0.2 * noise2(p * 5.1 + 3.7); }

/**
 * What a mirror at \`origin\` shows along \`R\`. Above the horizon, the studio. Below it the ray is
 * followed to the table: if it passes through the cell on the way (the floor map holds the
 * height of the cell's underside over every table point) it shows the cell, otherwise the
 * table with whatever shadow lies on it.
 */
fn mirror(origin: vec3f, R: vec3f) -> vec3f {
  let sky = studio(R);
  if (R.y > 0.06) { return sky; }
  let tFloor = min(origin.y / max(-R.y, 0.02), 16.0);
  var cellHit = 0.0;
  var cellY = 0.0;
  for (var i = 1; i <= 10; i++) {
    let q = origin + R * (tFloor * f32(i) / 10.0);
    let under = bodyHeightAt(q.x, q.z);
    if (under < 100.0 && q.y > under - 0.1 && q.y < min(under + 4.0, 5.0)) { cellHit = 1.0; cellY = q.y; break; }
  }
  let onTable = origin + R * tFloor;
  let table = F.palette[2].rgb * mix(0.5, 0.95, shadowAt(onTable, 1.5));
  let jelly = mix(F.palette[1].rgb, F.palette[2].rgb, 0.25) * (0.62 + 0.1 * cellY);
  let below = mix(table, jelly, cellHit);
  return mix(below, sky, smoothstep(-0.06, 0.06, R.y));
}

/** A reflection smeared along \`T\`, the direction across the brushing scratches. */
fn brushed(origin: vec3f, N: vec3f, V: vec3f, T: vec3f, spread: f32) -> vec3f {
  var c = vec3f(0.0);
  for (var i = -2; i <= 2; i++) {
    let n = normalize(N + T * (f32(i) * spread));
    c += mirror(origin, reflect(-V, n)) * (1.0 - 0.15 * abs(f32(i)));
  }
  return c / 4.1;
}

@fragment fn fs(in: VOut) -> @location(0) vec4f {
  var N = normalize(in.nrm);
  let V = normalize(F.camPos.xyz - in.world);
  if (dot(N, V) < 0.0) { N = -N; }
  let L = F.lightDir.xyz;
  let sh = shadowAt(in.world, 1.0);
  let nv = max(dot(N, V), 0.0);
  let p = in.local;
  // derivatives are taken here, outside any branch: the direction across the brushing scratches
  let dpx = dpdx(in.world); let dpy = dpdy(in.world);
  let dsx = dpdx(p.x); let dsy = dpdy(p.x);
  var T = cross(N, dpx * dsy - dpy * dsx);
  T = T / max(length(T), 1e-6);
  var c: vec3f;
  if (in.part > 0.5 && in.part < 1.5) {
    // Walnut: growth rings cut lengthwise show as wavy lines along the handle, with fine pores.
    let warp = fbm(vec2f(p.x * 0.9, p.y * 2.0 + p.z * 3.0));
    let rings = sin((p.y * 7.0 + p.z * 9.0 + warp * 5.0 + 0.35 * sin(p.x * 1.7)) * 3.1);
    let grain = smoothstep(-0.6, 0.9, rings);
    let pores = noise2(vec2f(p.x * 40.0, (p.y + p.z) * 260.0));
    var wood = mix(vec3f(0.16, 0.075, 0.035), vec3f(0.40, 0.21, 0.10), grain);
    wood *= 0.82 + 0.3 * pores;
    let diff = 0.28 + 0.72 * max(dot(N, L), 0.0) * (0.35 + 0.65 * sh);
    // an oiled finish: a soft sheen, a little of the room at grazing angles
    c = wood * diff + vec3f(ggx(N, V, L, 0.32)) * 0.35 * sh + mirror(in.world, reflect(-V, N)) * fresnel(nv, 0.04) * 0.5;
  } else if (in.part > 2.5 && in.part < 3.5) {
    // brass rivets
    let brass = vec3f(0.86, 0.62, 0.26);
    c = mirror(in.world, reflect(-V, N)) * brass * fresnel(nv, 0.75) + brass * ggx(N, V, L, 0.25) * 1.2 * sh;
  } else {
    // Steel. The flat is satin: ground from spine to edge, so the scratches run up the blade and
    // a reflection smears along its length. The bevel and the bolster are polished.
    let steel = vec3f(0.77, 0.78, 0.80);
    let isFlat = in.part < 0.5;
    let scratch = hash1(floor(p.x * 260.0)) - 0.5;
    var Nm = N;
    var spread = 0.012;
    var rough = 0.14;
    if (isFlat) {
      // a slight hollow in the grind: the face turns upward toward the spine, so the blade shows
      // the table and the cell near its edge and the room above them toward its back
      let hollow = vec3f(0.0, 1.0, 0.0) * (p.y - 0.9) * 0.16;
      Nm = normalize(N + hollow + T * scratch * 0.05);
      spread = 0.07;
      rough = 0.3;
    }
    let refl = brushed(in.world, Nm, V, T, spread);
    c = refl * steel * fresnel(nv, 0.72) + steel * ggx(Nm, V, L, rough) * 1.1 * sh + vec3f(0.02);
    // the grind line: the shoulder between flat and bevel catches the light
    if (in.part > 3.5) { c += vec3f(0.06) * sh; }
    // a faint darkening where the flat meets the spine, as on a forged blade
    if (isFlat) { c *= 0.94 + 0.06 * smoothstep(0.0, 0.5, p.y); }
  }
  return vec4f(c, 1.0);
}
`,Ns=`// Final composite to the canvas: gamma, a gentle vignette and dither.
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var<uniform> bg: vec4f;

struct VOut { @builtin(position) clip: vec4f, @location(0) uv: vec2f };

@vertex fn vs(@builtin(vertex_index) vi: u32) -> VOut {
  let p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var o: VOut;
  o.clip = vec4f(p[vi], 0.0, 1.0);
  o.uv = p[vi] * vec2f(0.5, -0.5) + 0.5;
  return o;
}

fn toSrgb(c: vec3f) -> vec3f {
  let lo = c * 12.92;
  let hi = 1.055 * pow(c, vec3f(1.0 / 2.4)) - 0.055;
  return select(hi, lo, c <= vec3f(0.0031308));
}

@fragment fn fs(in: VOut) -> @location(0) vec4f {
  var c = textureLoad(src, vec2i(in.clip.xy), 0).rgb;
  // soft shoulder so highlights roll off instead of clipping
  let peak = max(c.r, max(c.g, c.b));
  if (peak > 0.8) { c *= (0.8 + (1.0 - exp(-(peak - 0.8) * 2.5)) * 0.2) / peak; }
  let d = distance(in.uv, vec2f(0.5));
  c *= 1.0 - bg.w * smoothstep(0.45, 0.9, d);
  var s = toSrgb(max(c, vec3f(0.0)));
  let n = fract(sin(dot(in.clip.xy, vec2f(12.9898, 78.233))) * 43758.5453);
  s += (n - 0.5) / 255.0;
  return vec4f(s, 1.0);
}
`,Bs=`// "Show mesh": tetrahedron edges drawn over everything.
struct Cam { viewProj: mat4x4f, color: vec4f };
@group(0) @binding(0) var<uniform> cam: Cam;
@vertex fn vs(@location(0) pos: vec3f) -> @builtin(position) vec4f { return cam.viewProj * vec4f(pos, 1.0); }
@fragment fn fs() -> @location(0) vec4f { return cam.color; }
`,Pt="depth32float",Se="rgba16float",en=2048,nn=512,ie=11;class qn{constructor(e,n,o,s){this.device=e,this.context=n,this.canvas=o,this.primCount=0,this.pieces=new Map,this.knife=null,this.width=0,this.height=0,this.viewProj=new Float32Array(16),this.view=new Float32Array(16);const r=s.materialSlots??24;this.frameFloats=84+(6+r)*4,this.format=navigator.gpu.getPreferredCanvasFormat(),n.configure({device:e,format:this.format,alphaMode:"opaque"});const i=e,a=GPUBufferUsage;this.frameBuf=i.createBuffer({size:this.frameFloats*4,usage:a.UNIFORM|a.COPY_DST}),this.cellBuf=i.createBuffer({size:32,usage:a.UNIFORM|a.COPY_DST}),this.camLight=i.createBuffer({size:64,usage:a.UNIFORM|a.COPY_DST}),this.camFloor=i.createBuffer({size:64,usage:a.UNIFORM|a.COPY_DST}),this.camMain=i.createBuffer({size:64,usage:a.UNIFORM|a.COPY_DST}),this.linesBuf=i.createBuffer({size:80,usage:a.UNIFORM|a.COPY_DST}),this.blitBuf=i.createBuffer({size:16,usage:a.UNIFORM|a.COPY_DST});const c=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,l=GPUShaderStage.FRAGMENT;this.bglFrame=i.createBindGroupLayout({entries:[{binding:0,visibility:c,buffer:{}},{binding:1,visibility:c,buffer:{}},{binding:2,visibility:l,buffer:{type:"read-only-storage"}}]}),this.bglShadow=i.createBindGroupLayout({entries:[{binding:0,visibility:l,texture:{sampleType:"depth"}},{binding:1,visibility:l,sampler:{type:"comparison"}},{binding:2,visibility:l,texture:{sampleType:"depth"}}]}),this.bglPiece=i.createBindGroupLayout({entries:[{binding:0,visibility:c,buffer:{}}]}),this.bglScreen=i.createBindGroupLayout({entries:[{binding:0,visibility:l,texture:{sampleType:"float"}},{binding:1,visibility:l,sampler:{type:"filtering"}},{binding:2,visibility:l,texture:{sampleType:"depth"}},{binding:3,visibility:l,texture:{sampleType:"depth"}}]}),this.bglCam=i.createBindGroupLayout({entries:[{binding:0,visibility:c,buffer:{}}]}),this.bglBlit=i.createBindGroupLayout({entries:[{binding:0,visibility:l,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:l,buffer:{}}]});const h=S=>i.createShaderModule({code:S}),u=Ss({materialSlots:r,wallMaterial:s.wallMaterial??1,scarMaterial:s.scarMaterial??-1,constantsWgsl:s.hooks?.constantsWgsl,organelleWgsl:s.hooks?.organelleWgsl})+Ts+`
`+Rs+`
`,m=[{arrayStride:28,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:3,offset:24,format:"float32"}]},{arrayStride:16,attributes:[{shaderLocation:2,offset:0,format:"float32x4"}]}],d=[{arrayStride:28,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}],p=(...S)=>i.createPipelineLayout({bindGroupLayouts:S}),y=h(Es),v=S=>i.createRenderPipeline({layout:p(this.bglCam),vertex:{module:y,entryPoint:"vs",buffers:d},primitive:{topology:"triangle-list",cullMode:S},depthStencil:{format:Pt,depthWriteEnabled:!0,depthCompare:"less"}});this.pDepthNoCull=v("none"),this.pDepthCullFront=v("front");const A=[{format:Se}],w={format:Pt,depthWriteEnabled:!0,depthCompare:"less"},I=h(u+Is);this.pFloor=i.createRenderPipeline({layout:p(this.bglFrame,this.bglShadow),vertex:{module:I,entryPoint:"vs"},fragment:{module:I,entryPoint:"fs",targets:A},primitive:{topology:"triangle-strip"},depthStencil:w});const z=h(u+Cs);this.pOrganelle=i.createRenderPipeline({layout:p(this.bglFrame,this.bglShadow,this.bglPiece),vertex:{module:z,entryPoint:"vs",buffers:m},fragment:{module:z,entryPoint:"fs",targets:A},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:w});const C=h(u+zs);this.pBlade=i.createRenderPipeline({layout:p(this.bglFrame,this.bglShadow),vertex:{module:C,entryPoint:"vs",buffers:m},fragment:{module:C,entryPoint:"fs",targets:A},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:w});const E=h(u+Fs);this.pJelly=i.createRenderPipeline({layout:p(this.bglFrame,this.bglShadow,this.bglPiece,this.bglScreen),vertex:{module:E,entryPoint:"vs",buffers:m},fragment:{module:E,entryPoint:"fs",targets:A},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:Pt,depthWriteEnabled:!1,depthCompare:"less"}});const k=h(Ns);this.pBlit=i.createRenderPipeline({layout:p(this.bglBlit),vertex:{module:k,entryPoint:"vs"},fragment:{module:k,entryPoint:"fs",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}});const b=h(Bs);this.pLines=i.createRenderPipeline({layout:p(this.bglCam),vertex:{module:b,entryPoint:"vs",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:b,entryPoint:"fs",targets:[{format:this.format,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"line-list"}}),this.shadowTex=i.createTexture({size:[en,en],format:Pt,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.floorTex=i.createTexture({size:[nn,nn],format:Pt,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});const g=i.createSampler({compare:"less",magFilter:"linear",minFilter:"linear"});this.gShadow=i.createBindGroup({layout:this.bglShadow,entries:[{binding:0,resource:this.shadowTex.createView()},{binding:1,resource:g},{binding:2,resource:this.floorTex.createView()}]});const P=S=>i.createBindGroup({layout:this.bglCam,entries:[{binding:0,resource:{buffer:S}}]});this.gCamLight=P(this.camLight),this.gCamFloor=P(this.camFloor),this.gCamMain=P(this.camMain),this.gLines=P(this.linesBuf)}static async create(e,n={}){if(!navigator.gpu)throw new Error("WebGPU is not available in this browser.");const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!o)throw new Error("No WebGPU adapter found.");const s=await o.requestDevice(),r=e.getContext("webgpu");if(!r)throw new Error("Could not create a WebGPU canvas context.");return new qn(s,r,e,n)}setPrimitives(e,n){const o=new Float32Array(8);o.set([n.wallThickness,n.bodyCount]),o.set((n.app??[]).slice(0,6),2),this.device.queue.writeBuffer(this.cellBuf,0,o),this.primBuf?.destroy(),this.primBuf=this.device.createBuffer({size:Math.max(16,e.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.primBuf,0,e),this.primCount=n.organelleCount,this.gFrame=this.device.createBindGroup({layout:this.bglFrame,entries:[{binding:0,resource:{buffer:this.frameBuf}},{binding:1,resource:{buffer:this.cellBuf}},{binding:2,resource:{buffer:this.primBuf}}]})}resize(){const e=Math.min(window.devicePixelRatio||1,2),n=Math.max(1,Math.floor(this.canvas.clientWidth*e)),o=Math.max(1,Math.floor(this.canvas.clientHeight*e));if(n===this.width&&o===this.height)return;this.width=n,this.height=o,this.canvas.width=n,this.canvas.height=o;for(const a of[this.sceneColor,this.accum,this.sceneDepth,this.backDepth])a?.destroy();const s=this.device,r=GPUTextureUsage;this.sceneColor=s.createTexture({size:[n,o],format:Se,usage:r.RENDER_ATTACHMENT|r.TEXTURE_BINDING|r.COPY_SRC|r.COPY_DST}),this.accum=s.createTexture({size:[n,o],format:Se,usage:r.RENDER_ATTACHMENT|r.TEXTURE_BINDING|r.COPY_SRC|r.COPY_DST}),this.sceneDepth=s.createTexture({size:[n,o],format:Pt,usage:r.RENDER_ATTACHMENT|r.TEXTURE_BINDING}),this.backDepth=s.createTexture({size:[n,o],format:Pt,usage:r.RENDER_ATTACHMENT|r.TEXTURE_BINDING});const i=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});this.gScreen=s.createBindGroup({layout:this.bglScreen,entries:[{binding:0,resource:this.sceneColor.createView()},{binding:1,resource:i},{binding:2,resource:this.sceneDepth.createView()},{binding:3,resource:this.backDepth.createView()}]}),this.gBlit=s.createBindGroup({layout:this.bglBlit,entries:[{binding:0,resource:this.accum.createView()},{binding:1,resource:{buffer:this.blitBuf}}]})}makeMesh(e,n){const o=this.device,s=e.pos.length/3,r=o.createBuffer({size:Math.max(28,s*28),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),i=new Float32Array(s*4);if("tetId"in e)for(let h=0;h<s;h++)i.set(e.restPos.subarray(3*h,3*h+3),4*h),i[4*h+3]=n(h);else i.set(e.rest);const a=o.createBuffer({size:Math.max(16,i.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(a,0,i);const c=o.createBuffer({size:Math.max(4,e.idx.byteLength),usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(c,0,e.idx);const l={dyn:r,rest:a,idx:c,count:e.idx.length,scratch:new Float32Array(s*7),src:e};return this.uploadMesh(l),l}uploadMesh(e){const{pos:n,normal:o}=e.src,s=e.scratch,r="tetId"in e.src?e.src.scalar??e.src.coord:void 0;for(let i=0,a=n.length/3;i<a;i++)s[7*i]=n[3*i],s[7*i+1]=n[3*i+1],s[7*i+2]=n[3*i+2],s[7*i+3]=o[3*i],s[7*i+4]=o[3*i+1],s[7*i+5]=o[3*i+2],s[7*i+6]=r?r[i]:0;this.device.queue.writeBuffer(e.dyn,0,s)}destroyMesh(e){e.dyn.destroy(),e.rest.destroy(),e.idx.destroy()}syncPieces(e,n){const o=new Set(e);for(const[s,r]of this.pieces)o.has(s)||(this.destroyMesh(r.skin),r.organelles.forEach(i=>this.destroyMesh(i)),r.uniform.destroy(),r.simPos.destroy(),r.edges.destroy(),this.pieces.delete(s));for(const s of e){let r=this.pieces.get(s);if(r)this.uploadMesh(r.skin),r.organelles.forEach(i=>this.uploadMesh(i));else{const i=this.device,a=i.createBuffer({size:144,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),c=new Float32Array(36);s.planes.slice(0,8).forEach((f,u)=>{c.set(f.n,4*u),c[4*u+3]=f.d}),c[32]=Math.min(8,s.planes.length),i.queue.writeBuffer(a,0,c);const l=i.createBuffer({size:s.sim.pos.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),h=i.createBuffer({size:s.sim.edges.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(h,0,s.sim.edges),r={piece:s,uniform:a,group:i.createBindGroup({layout:this.bglPiece,entries:[{binding:0,resource:{buffer:a}}]}),skin:this.makeMesh(s.skin,f=>s.skin.isCutFace[f]),organelles:s.organelles.map(f=>this.makeMesh(f,()=>f.material)),simPos:l,edges:h,edgeCount:s.sim.edges.length},this.pieces.set(s,r)}n&&this.device.queue.writeBuffer(r.simPos,0,s.sim.pos)}}syncKnife(e){e&&(!this.knife||this.knife.src.pos.length!==e.pos.length?(this.knife&&this.destroyMesh(this.knife),this.knife=this.makeMesh(e,()=>0)):(this.knife.src=e,this.uploadMesh(this.knife)))}get aspect(){return this.resize(),this.width/this.height}cameraMatrices(e){this.resize();const n=this.width/this.height,o=.5,s=200,r=ws(e.fovY,n,o,s);r[8]=-2*(e.lensShiftX??0),r[9]=-2*(e.lensShiftY??0);const i=Ae(e.eye,e.target,[0,1,0]);return{proj:r,view:i,viewProj:Pe(r,i),near:o,far:s}}render(e,n,o){const{proj:s,view:r,viewProj:i}=this.cameraMatrices(n);this.view=r,this.viewProj=i;const a=this.device,c=a.queue;this.syncPieces(e,o.showMesh),this.syncKnife(o.knife);const l=Os([-.42,1,.38]),h=n.target,f=Ae([h[0]+l[0]*30,h[1]+l[1]*30,h[2]+l[2]*30],h,[0,0,-1]),u=Pe(Qe(-11,11,-11,11,1,60),f),m=Ae([h[0],-.5,h[2]],[h[0],10,h[2]],[0,0,-1]),d=Pe(Qe(-ie,ie,-ie,ie,0,20),m),p=new Float32Array(this.frameFloats);p.set(i,0),p.set(r,16),p.set(u,32),p.set(d,48),p.set([...n.eye,1],64),p.set([...l,0],68),p.set([this.width,this.height,1/this.width,1/this.height],72),p.set([s[10],s[14],.5,200],76),p.set([o.time,this.primCount,o.highlight,o.hidden],80),p.set(o.palette,84),p[84+4*Mt.optics+3]=o.scalarView?1:0;const y=o.palette[4*Mt.optics+1];c.writeBuffer(this.frameBuf,0,p),c.writeBuffer(this.camLight,0,u),c.writeBuffer(this.camFloor,0,d),c.writeBuffer(this.camMain,0,i);const v=p.subarray(84+4*Mt.background,84+4*Mt.background+3);c.writeBuffer(this.blitBuf,0,new Float32Array([v[0],v[1],v[2],y?.25:.06]));const A=e.map(g=>this.pieces.get(g)),w=a.createCommandEncoder(),I=(g,P)=>{g.setVertexBuffer(0,P.dyn),g.setIndexBuffer(P.idx,"uint32"),g.drawIndexed(P.count)},z=(g,P)=>{g.setVertexBuffer(0,P.dyn),g.setVertexBuffer(1,P.rest),g.setIndexBuffer(P.idx,"uint32"),g.drawIndexed(P.count)},C=(g,P,S,V)=>{const N=w.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:g.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});N.setPipeline(P),N.setBindGroup(0,S),V.forEach(K=>I(N,K)),N.end()},E=A.map(g=>g.skin);o.knife&&this.knife&&E.push(this.knife),C(this.shadowTex,this.pDepthNoCull,this.gCamLight,E),C(this.floorTex,this.pDepthNoCull,this.gCamFloor,A.map(g=>g.skin));{const g=w.beginRenderPass({colorAttachments:[{view:this.sceneColor.createView(),clearValue:{r:v[0],g:v[1],b:v[2],a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.sceneDepth.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});g.setBindGroup(0,this.gFrame),g.setBindGroup(1,this.gShadow),g.setPipeline(this.pFloor),g.draw(4),g.setPipeline(this.pOrganelle);for(const P of A)g.setBindGroup(2,P.group),P.organelles.forEach(S=>z(g,S));o.knife&&this.knife&&(g.setPipeline(this.pBlade),z(g,this.knife)),g.end()}w.copyTextureToTexture({texture:this.sceneColor},{texture:this.accum},[this.width,this.height]);const k=n.eye,b=A.map(g=>({g,d:Ds(Vs(g.piece.sim.pos),k)})).sort((g,P)=>P.d-g.d).map(g=>g.g);b.forEach((g,P)=>{C(this.backDepth,this.pDepthCullFront,this.gCamMain,[g.skin]);const S=w.beginRenderPass({colorAttachments:[{view:this.accum.createView(),loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.sceneDepth.createView(),depthReadOnly:!0}});S.setPipeline(this.pJelly),S.setBindGroup(0,this.gFrame),S.setBindGroup(1,this.gShadow),S.setBindGroup(2,g.group),S.setBindGroup(3,this.gScreen),z(S,g.skin),S.end(),P<b.length-1&&w.copyTextureToTexture({texture:this.accum},{texture:this.sceneColor},[this.width,this.height])});{const g=w.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});if(g.setPipeline(this.pBlit),g.setBindGroup(0,this.gBlit),g.draw(3),o.showMesh){const P=y?[.85,.9,1,.28]:[.08,.07,.06,.32];c.writeBuffer(this.linesBuf,0,new Float32Array([...i,...P])),g.setPipeline(this.pLines),g.setBindGroup(0,this.gLines);for(const S of A)g.setVertexBuffer(0,S.simPos),g.setIndexBuffer(S.edges,"uint32"),g.drawIndexed(S.edgeCount)}g.end()}c.submit([w.finish()])}}function Os(t){const e=Math.hypot(t[0],t[1],t[2]);return[t[0]/e,t[1]/e,t[2]/e]}function Vs(t){const e=[0,0,0];for(let o=0;o<t.length;o+=3)e[0]+=t[o],e[1]+=t[o+1],e[2]+=t[o+2];const n=t.length/3;return[e[0]/n,e[1]/n,e[2]/n]}function Ds(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}function Ls(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const $=(t,e,n,o,s)=>({value:t,unit:e,grade:n,source:o,verified:s}),re="Schaber et al. 2010, Eur Biophys J 39:1547, data set 3",jt="Schaber et al. 2012, Mol Syst Biol 8:622, Model 22 (SBML)",_t="fitted 2026-10-28 to Babazadeh 2013 and Miermont 2013 (E12′ + E13′ + Pbs2 + Schaber E8, no-T7 set)",_s={RT:$(2.52,"MPa·l/mol","C","RT at 30 °C"),Vb:$(.33,"relative","A",re,"2026-10-22"),eps:$(11.4,"MPa","A",re,"2026-10-22"),c0i:$(.5,"Osm/l","A",re,"2026-10-22"),P0:$(.5,"MPa","A",re,"2026-10-22"),kw:$(3.46,"min⁻¹ per Osm/l","D","chosen so a step shrinks the cell in < 0.5 min (spec E1; 2026-10-22_e1_kink_stability.py)"),osmPerNaCl:$(1.86,"Osm/mol","C","two ions, osmotic coefficient 0.93"),osmPerSorbitol:$(1,"Osm/mol","C","non-electrolyte"),alphaHog1:$(3.6,"","A","Miermont et al. 2013, PNAS 110:5725, Fig. 4J","2026-10-22"),stall50:$(1.9,"M sorbitol","A","Miermont 2013: 50 % of cells respond at ≈1.9 M sorbitol, none above 2.2 M"),stallWidth:$(.12,"M sorbitol","D","width of the responding-fraction sigmoid, read so that all respond below 1.5 M and none above 2.2 M"),kg:$(1.235,"Osm·min⁻²","D",_t),kleak:$(97.07,"min⁻¹","D",_t),kc:$(.3175,"min⁻¹","A",`${jt}: v15_5 k = 0.00529124 s⁻¹`,"2026-10-28"),ko:$(.1922,"min⁻¹","A",`${jt}: v16_6 k = 0.00320327 s⁻¹`,"2026-10-28"),Ki:$(.2123,"of total Hog1","A",`${jt}: v16_6 K_i = 0.0811 / Hog1Total 0.3821`,"2026-10-28"),hFps1:$(.6287,"","A",`${jt}: v16_6 h`,"2026-10-28"),ka:$(.1868,"min⁻¹","D",`${_t}; only k_a·k_h is identifiable`),kh:$(305.5,"min⁻¹","D",`${_t}; only k_a·k_h is identifiable`),kW:$(1.5769,"min⁻¹","A",`${jt}: v2_k·[Phosphatase] (model value, taken at v = 1)`,"2026-10-23"),kp:$(3.154,"min⁻¹","D",_t),kf:$(.9176,"min⁻¹","D",`${_t}; lag 14–19 min at 0.4 M, consistent with English 2015 Ste50-P`),kin:$(613.98,"min⁻¹","A","Babazadeh et al. 2013, Fig. 6B FRAP fast component 0.16 s at 0.4 M, mapped through κ(0.70); k_in = k_out (D)"),kout:$(613.98,"min⁻¹","D","k_in / k_out = 1"),doubling:$(90,"min","C","budding yeast in rich medium at 30 °C"),pc:$(.5,"of P₀","D","turgor below which growth stops (Lockhart form, spec E21)"),burdenB:$(.04,"per min of full nuclear Hog1","D","cost of sustained Hog1 activity (Mitchell 2015 direction; spec E21)"),burdenTau:$(30,"min","D","memory of the burden: a leaky integral, so it fades after the stress"),Vlysis:$(1.15,"relative","D","spec E22"),Jmax:$(14,"Osm·min⁻¹","D","the most glycerol synthesis a player can order; ≈ the wild type’s peak at 1 M sorbitol"),tauGpd1:$(10,"min","D","a Gpd1 lever change takes effect over protein-synthesis time"),costGpd1:$(.3,"growth share at full synthesis","D","spec E23"),costFps1:$(.02,"growth share when fully shut","D","spec E23: closing Fps1 is cheap")},q=t=>_s[t].value,Us={WT:{id:"WT",name:"wild type",effect:{},source:"BY4741 / W303 background of the fitted data"},hog1Δ:{id:"hog1Δ",name:"hog1Δ",effect:{noHog1:!0},source:"no Hog1: no glycerol synthesis response, no hold on Fps1"},"gpd1Δ gpd2Δ":{id:"gpd1Δ gpd2Δ",name:"gpd1Δ gpd2Δ",effect:{noSynthesis:!0},source:"Babazadeh et al. 2013, Fig. S2: no glycerol synthesis"},fps1Δ:{id:"fps1Δ",name:"fps1Δ",effect:{fps1:"absent"},source:"Tamás et al. 1999: no glycerol export; sensitive to hypo-osmotic shock"},"fps1-ΔN":{id:"fps1-ΔN",name:"fps1-ΔN",effect:{fps1:"always-open"},source:"Tamás et al. 1999: the channel cannot close; leaks glycerol"}},Ne=q("RT"),Et=q("Vb"),je=q("eps"),jn=q("c0i"),ue=q("P0"),sn=q("kw"),Be=Math.exp(-ue/je),Gs=jn-ue/Ne,Hn=jn*(1-Et),Ws=q("alphaHog1"),Xt=q("ko")/(q("ko")+.5*q("kc")),Yn={gpd1:null,fps1:null};function He(t){return q("osmPerNaCl")*t.nacl+q("osmPerSorbitol")*t.sorbitol}function Ye(t){return t>=Be?je*Math.log(Math.max(t,1e-9)/Be):0}function Xe(t){const e=Math.max(t,.35);return 1/e*Math.exp(-Ws*(1/e-1))}function Xn(t){return Math.max(0,1-Math.max(t,0)**(2/3))}function $n(t,e,n,o){let s=Et+1e-6,r=3,i=t;for(let a=0;a<40;a++){const c=Ye(i),l=i-t-o*sn*(e/(i-Et)-(Gs+n)-c/Ne),h=i>=Be?je/i:0,f=1+o*sn*(e/(i-Et)**2+h/Ne);l<0?s=i:l>0&&(r=i);let u=i-l/f;(u<=s||u>=r)&&(u=.5*(s+r));const m=Math.abs(u-i)<1e-12;if(i=u,m)break}return i}const ut=(t,e,n,o)=>e+(t-e)*Math.exp(-n*o);function qs(t){const e=Math.min(.999999999,Math.max(1e-9,Ls(t)()));return q("stall50")+q("stallWidth")*Math.log(e/(1-e))}function Kn(t=1){return{t:0,V:1,g:0,J:0,f:Xt,W:0,H:0,X:0,Hn:0,B:0,gen:0,lysed:!1,stallOsm:qs(t)}}function Jn(t,e){return He(e)>t.stallOsm}function Zn(t,e,n,o){const s=q("pc"),r=Math.min(1,Math.max(0,t/ue-s))/(1-s),i=1/(1+q("burdenB")*e),a=q("costGpd1")*Math.min(1,n/q("Jmax"))+q("costFps1")*Math.max(0,1-o);return Math.max(0,r*i*(1-a))}function js(t,e,n,o=Yn,s="WT",r=1){if(t.lysed)return{...t,t:t.t+n};const i=Us[s].effect,a=He(e),c=$n(t.V,Hn+t.g,a,n),l=Ye(c),h=Jn(t,e)?0:Xe(c)*r;let f;if(i.fps1==="absent")f=0;else if(i.fps1==="always-open")f=Xt;else if(o.fps1!==null)f=ut(t.f,o.fps1*Xt,q("kc")+q("ko"),n);else{const E=q("ko")/(1+(Math.max(t.H,0)*(1-Et)/(c-Et)/q("Ki"))**q("hFps1")),k=q("kc")*(1-l**2/(ue**2+l**2));f=ut(t.f,E/(E+k),E+k,n)}const u=f/Xt;let m;i.noSynthesis?m=0:o.gpd1!==null?m=ut(t.J,o.gpd1*q("Jmax"),1/q("tauGpd1"),n):m=t.J+n*q("kg")*t.H;const d=q("kleak")*u/(c-Et),p=d>0?ut(t.g,m/d,d,n):t.g+n*m;let y=0,v=0,A=t.X,w=0;if(!i.noHog1){const E=q("ka")*Xn(c)*(1-t.X);y=ut(t.W,E/(E+q("kW")),h*(E+q("kW")),n);const k=q("kh")*y;v=ut(t.H,k/(k+q("kp")),h*(k+q("kp")),n),A=ut(t.X,v,h*q("kf"),n);const b=q("kin")*v+q("kout");w=ut(t.Hn,q("kin")*v/b,h*b,n)}const I=w/Qn,z=ut(t.B,I*q("burdenTau"),1/q("burdenTau"),n),C=t.gen+Zn(l,z,m,u)*n/q("doubling");return{...t,t:t.t+n,V:c,g:p,J:m,f,W:y,H:v,X:A,Hn:w,B:z,gen:C,lysed:c>q("Vlysis")}}function Hs(t,e){const n=Ye(t.V),o=t.f/Xt;return{P:n,F:o,rHog1:t.Hn/Qn,growth:t.lysed?0:Zn(n,t.B,t.J,o),kappa:Jn(t,e)?0:Xe(t.V)}}function Te(t,e){let n={nacl:0,sorbitol:0};for(const o of t.steps)o.at<=e+1e-9&&(n=o.medium);return n}function on(t,e){const n=Hs(t,e);return{t:t.t,V:t.V,rHog1:n.rHog1,P:n.P,growth:n.growth,F:n.F,J:t.J}}function Qi(t,e,n={}){const o=n.dt??.05,s=n.every??.5;let r=Kn(n.seed??1);n.stallOsm!==void 0&&(r={...r,stallOsm:n.stallOsm});const i=[on(r,Te(t,0))],a=Math.round(e/o),c=Math.max(1,Math.round(s/o));for(let l=1;l<=a;l++){const h=Te(t,r.t);r=js(r,h,o,n.levers?n.levers(r.t,r):Yn,n.strain??"WT"),l%c===0&&i.push(on(r,Te(t,r.t)))}return{label:n.label??"run",samples:i,generations:r.gen,lysed:r.lysed}}const Qn=(()=>{let t={...Kn(1),stallOsm:1/0};const e={nacl:1,sorbitol:0};let n=0;for(let o=0;o<60/.05;o++){const s=He(e),r=$n(t.V,Hn+t.g,s,.05),i=Xe(r),a=q("ka")*Xn(r)*(1-t.X),c=ut(t.W,a/(a+q("kW")),i*(a+q("kW")),.05),l=q("kh")*c,h=ut(t.H,l/(l+q("kp")),i*(l+q("kp")),.05),f=ut(t.X,h,i*q("kf"),.05),u=q("kin")*h+q("kout"),m=ut(t.Hn,q("kin")*h/u,i*u,.05);n=Math.max(n,m),t={...t,V:r,W:c,H:h,X:f,Hn:m}}return n})(),j={Ellipsoid:0,Capsule:1,Torus:2,Cone:3,Disc:4,Bowl:5},rn=12,M={Cytoplasm:0,Wall:1,Nucleus:2,Nucleolus:3,Vacuole:4,Mitochondrion:5,Septin:6,BudScar:7,Actin:8,Adhesion:9,Lysosome:10,ER:11,Nucleoid:12,Spindle:13,Ring:14,Septum:15,Golgi:16,Receptor:17,Chloroplast:18,Peroxisome:19,Genome:20,ViralProtein:21,Vesicle:22,Condensate:23},$e=24,ts=24,Ys=.3;function Xs(t,e=1){const{pos:n,tets:o,restInv:s}=t,r=new Float32Array(o.length/4),i=1/(e*e);for(let a=0;a<r.length;a++){const c=3*o[4*a],l=3*o[4*a+1],h=3*o[4*a+2],f=3*o[4*a+3],u=9*a,m=n[l]-n[c],d=n[l+1]-n[c+1],p=n[l+2]-n[c+2],y=n[h]-n[c],v=n[h+1]-n[c+1],A=n[h+2]-n[c+2],w=n[f]-n[c],I=n[f+1]-n[c+1],z=n[f+2]-n[c+2],C=[[m*s[u]+y*s[u+1]+w*s[u+2],d*s[u]+v*s[u+1]+I*s[u+2],p*s[u]+A*s[u+1]+z*s[u+2]],[m*s[u+3]+y*s[u+4]+w*s[u+5],d*s[u+3]+v*s[u+4]+I*s[u+5],p*s[u+3]+A*s[u+4]+z*s[u+5]],[m*s[u+6]+y*s[u+7]+w*s[u+8],d*s[u+6]+v*s[u+7]+I*s[u+8],p*s[u+6]+A*s[u+7]+z*s[u+8]]];let E=0;for(let k=0;k<3;k++)for(let b=0;b<3;b++){const P=.5*((C[k][0]*C[b][0]+C[k][1]*C[b][1]+C[k][2]*C[b][2])*i-(k===b?1:0));E+=P*P}r[a]=Math.sqrt(E)}return r}function $s(t,e){const n=t.invMass.length,o=new Float32Array(n),s=new Float32Array(n);for(let r=0;r<e.length;r++){const i=t.restVol[r];for(let a=0;a<4;a++){const c=t.tets[4*r+a];o[c]+=e[r]*i,s[c]+=i}}for(let r=0;r<n;r++)o[r]=s[r]>0?o[r]/s[r]:0;return o}function Ks(t,e=1){const n=t.sim,o=t.skin,s=$s(n,Xs(n,e)),r=o.scalar&&o.scalar.length===o.tetId.length?o.scalar:new Float32Array(o.tetId.length);for(let i=0;i<r.length;i++){const a=4*o.tetId[i];let c=0;for(let l=0;l<4;l++)c+=o.bary[4*i+l]*s[n.tets[a+l]];r[i]=Math.min(1,Math.max(0,c)/Ys)}return o.scalar=r,r}function es(t,e,n){const o=Math.max(n-Math.abs(t-e),0)/n;return Math.min(t,e)-o*o*n/4}function Js(t,e,n){return-es(-t,-e,n)}function Gt(t,e,n,o){switch(t.kind){case j.Ellipsoid:{const[s,r,i]=t.b,a=(e-t.a[0])/s,c=(n-t.a[1])/r,l=(o-t.a[2])/i,h=Math.sqrt(a*a+c*c+l*l),f=Math.sqrt(a*a/(s*s)+c*c/(r*r)+l*l/(i*i));return f<1e-9?-Math.min(s,r,i):h*(h-1)/f}case j.Cone:{const s=t.b[0]-t.a[0],r=t.b[1]-t.a[1],i=t.b[2]-t.a[2],a=e-t.a[0],c=n-t.a[1],l=o-t.a[2],h=Math.min(1,Math.max(0,(a*s+c*r+l*i)/(s*s+r*r+i*i))),f=a-s*h,u=c-r*h,m=l-i*h;return Math.sqrt(f*f+u*u+m*m)-(t.R+(t.r-t.R)*h)}case j.Capsule:{const s=t.b[0]-t.a[0],r=t.b[1]-t.a[1],i=t.b[2]-t.a[2],a=e-t.a[0],c=n-t.a[1],l=o-t.a[2],h=Math.min(1,Math.max(0,(a*s+c*r+l*i)/(s*s+r*r+i*i))),f=a-s*h,u=c-r*h,m=l-i*h;return Math.sqrt(f*f+u*u+m*m)-t.r}case j.Torus:{const s=e-t.a[0],r=n-t.a[1],i=o-t.a[2],a=s*t.b[0]+r*t.b[1]+i*t.b[2],c=s-a*t.b[0],l=r-a*t.b[1],h=i-a*t.b[2],f=Math.sqrt(c*c+l*l+h*h)-t.R;return Math.sqrt(f*f+a*a)-t.r}case j.Disc:{const s=Math.hypot(t.b[0],t.b[1],t.b[2])||1e-9,r=e-t.a[0],i=n-t.a[1],a=o-t.a[2],c=(r*t.b[0]+i*t.b[1]+a*t.b[2])/s,l=r-c*t.b[0]/s,h=i-c*t.b[1]/s,f=a-c*t.b[2]/s,u=Math.sqrt(l*l+h*h+f*f),m=t.r>0?Math.max(u-t.R,t.r-u):u-t.R,d=Math.abs(c)-s;return Math.hypot(Math.max(m,0),Math.max(d,0))+Math.min(Math.max(m,d),0)}case j.Bowl:{const s=Math.min(1,Math.hypot(t.b[0],t.b[1],t.b[2]))||1e-9,r=Math.sqrt(1-s*s),i=e-t.a[0],a=n-t.a[1],c=o-t.a[2],l=(i*t.b[0]+a*t.b[1]+c*t.b[2])/s,h=Math.sqrt(i*i+a*a+c*c),f=Math.sqrt(Math.max(0,h*h-l*l));return(r*f<s*l?Math.abs(h-t.R):Math.hypot(f-t.R*s,l-t.R*r))-t.r}}return 1/0}function Zs(t){switch(t.kind){case j.Ellipsoid:return{lo:[t.a[0]-t.b[0],t.a[1]-t.b[1],t.a[2]-t.b[2]],hi:[t.a[0]+t.b[0],t.a[1]+t.b[1],t.a[2]+t.b[2]]};case j.Disc:{const e=t.R+Math.hypot(t.b[0],t.b[1],t.b[2]);return{lo:[t.a[0]-e,t.a[1]-e,t.a[2]-e],hi:[t.a[0]+e,t.a[1]+e,t.a[2]+e]}}case j.Torus:case j.Bowl:{const e=t.R+t.r;return{lo:[t.a[0]-e,t.a[1]-e,t.a[2]-e],hi:[t.a[0]+e,t.a[1]+e,t.a[2]+e]}}default:{const e=Math.max(t.R,t.r);return{lo:[Math.min(t.a[0],t.b[0])-e,Math.min(t.a[1],t.b[1])-e,Math.min(t.a[2],t.b[2])-e],hi:[Math.max(t.a[0],t.b[0])+e,Math.max(t.a[1],t.b[1])+e,Math.max(t.a[2],t.b[2])+e]}}}}function Ut(t,e,n,o){return t.n[0]*e+t.n[1]*n+t.n[2]*o-t.d}function $t(t,e,n,o,s=.001){const r=t(e+s,n-s,o-s),i=t(e-s,n-s,o+s),a=t(e-s,n+s,o-s),c=t(e+s,n+s,o+s),l=r-i-a+c,h=-r-i+a+c,f=-r+i-a+c,u=Math.sqrt(l*l+h*h+f*f)||1;return[l/u,h/u,f/u]}const Qs={union:0,subtract:1,morph:2};function to(t,e){const n=[...t.map(s=>({p:s.prim,op:Qs[s.op],blend:s.blend})),...e.map(s=>({p:s,op:0,blend:0}))],o=new Float32Array(n.length*rn);return n.forEach(({p:s,op:r,blend:i},a)=>{const c=a*rn;o[c]=s.kind,o[c+1]=s.material,o[c+2]=s.R,o[c+3]=s.r,o.set(s.a,c+4),o[c+7]=r,o.set(s.b,c+8),o[c+11]=i}),o}function vt(t,e,n,o){const s=t.body;let r=Gt(s[0].prim,e,n,o),i=0,a=-1;for(let c=1;c<s.length;c++){const l=s[c],h=Gt(l.prim,e,n,o);l.op==="morph"?(i=r,a=l.blend,r=h):l.op==="union"?r=l.blend>0?es(r,h,l.blend):Math.min(r,h):r=l.blend>0?Js(r,-h,l.blend):Math.max(r,-h)}return a<0?r:i+(r-i)*a}function eo(t){const e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];return t.forEach((o,s)=>{if(s>0&&o.op==="subtract")return;const r=Zs(o.prim),i=o.op==="morph"?0:o.blend;for(let a=0;a<3;a++)e[a]=Math.min(e[a],r.lo[a]-i),n[a]=Math.max(n[a],r.hi[a]+i)}),{lo:e,hi:n}}function de(t,e,n,o,s){let r=vt(t,n,o,s);for(const i of e)r=Math.max(r,Ut(i,n,o,s));return r}function me(t,e,n,o,s=t.wallThickness){if(vt(t,e,n,o)>-s)return M.Wall;for(const r of t.organelles)if(r.material!==M.BudScar&&Gt(r,e,n,o)<0)return r.material;return M.Cytoplasm}function no(t){return to(t.body,t.organelles)}const bt=(t,e,n)=>t+(e-t)*n,Wt=(t,e,n)=>[bt(t[0],e[0],n),bt(t[1],e[1],n),bt(t[2],e[2],n)],ns=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),ss=t=>{const e=Math.hypot(...t)||1;return[t[0]/e,t[1]/e,t[2]/e]},os=.02;function so(t,e,n){if(n<=0)return t;if(n>=1)return e;const o=[...t.body,{...e.body[0],op:"morph",blend:n},...e.body.slice(1)],s=f=>vt({body:o},f[0],f[1],f[2]),r=ao(t.tubules,e.tubules,n).flatMap(f=>oo(f,u=>s(u)<0)),i=ro(an(t),an(e),n).filter(f=>s(Yt(f))<=is(f)),a=r.flatMap(f=>f.points.slice(1).map((u,m)=>({kind:j.Capsule,material:f.material,a:f.points[m],b:u,R:0,r:f.radius}))),c=n<.5?[t,e]:[e,t],l=new Map;for(const f of c)for(const u of f.organelles)l.has(u.material)||l.set(u.material,l.size);const h=[...i,...a].map((f,u)=>({p:f,i:u})).sort((f,u)=>l.get(f.p.material)-l.get(u.p.material)||f.i-u.i).map(f=>f.p);return{cellType:t.cellType,stage:bt(t.stage,e.stage,n),body:o,bounds:{lo:[0,1,2].map(f=>Math.min(t.bounds.lo[f],e.bounds.lo[f])),hi:[0,1,2].map(f=>Math.max(t.bounds.hi[f],e.bounds.hi[f]))},wallThickness:bt(t.wallThickness,e.wallThickness,n),cortexDepth:bt(t.cortexDepth,e.cortexDepth,n),mesh:{minSpacing:bt(t.mesh.minSpacing,e.mesh.minSpacing,n),maxSpacing:bt(t.mesh.maxSpacing,e.mesh.maxSpacing,n),minParticles:Math.max(t.mesh.minParticles,e.mesh.minParticles),skinGrid:bt(t.mesh.skinGrid,e.mesh.skinGrid,n)},organelles:h,tubules:r,seed:t.seed}}function oo(t,e){const n=[];let o=[];for(const s of[...t.points,null]){if(s&&e(s)){o.push(s);continue}o.length>=2&&n.push({...t,points:o}),o=[]}return n}function an(t){const e=(o,s)=>`${o.join()}|${s.join()}`,n=new Set(t.tubules.flatMap(o=>o.points.slice(1).map((s,r)=>e(o.points[r],s))));return t.organelles.filter(o=>o.kind!==j.Capsule||!n.has(e(o.a,o.b)))}function Yt(t){if(t.kind===j.Bowl){const e=ss(t.b);return[t.a[0]+e[0]*t.R,t.a[1]+e[1]*t.R,t.a[2]+e[2]*t.R]}return t.kind===j.Capsule||t.kind===j.Cone?Wt(t.a,t.b,.5):t.a}function is(t){switch(t.kind){case j.Ellipsoid:return Math.min(...t.b);case j.Torus:return t.r;case j.Capsule:return t.r;case j.Disc:return t.r;case j.Bowl:return t.r;default:return Math.max(t.R,t.r)}}function ln(t,e){switch(t.kind){case j.Ellipsoid:return{...t,a:e,b:[0,0,0]};case j.Torus:return{...t,a:e,R:0,r:0};case j.Disc:return{...t,a:e,R:0,r:0};case j.Bowl:return{...t,a:e,R:0,r:0};default:return{...t,a:e,b:e,R:0,r:0}}}function io(t,e,n){return{kind:e.kind,material:e.material,a:Wt(t.a,e.a,n),b:e.kind===j.Torus?ss(Wt(t.b,e.b,n)):Wt(t.b,e.b,n),R:bt(t.R,e.R,n),r:bt(t.r,e.r,n)}}function cn(t,e){let n=Yt(t),o=1/0;for(const s of e){if(s.material!==t.material)continue;const r=ns(Yt(s),Yt(t));r<o&&(o=r,n=Yt(s))}return n}function ro(t,e,n){const o=a=>{const c=new Map;for(const l of a){const h=`${l.material}:${l.kind}`;c.set(h,[...c.get(h)??[],l])}return c},s=o(t),r=o(e),i=[];for(const a of new Set([...s.keys(),...r.keys()])){const c=s.get(a)??[],l=r.get(a)??[];for(let h=0;h<Math.max(c.length,l.length);h++){const f=c[h]??ln(l[h],cn(l[h],t)),u=l[h]??ln(c[h],cn(c[h],e)),m=io(f,u,n);is(m)>=os&&i.push(m)}}return i}function hn(t,e){const n=[0];for(let r=1;r<t.length;r++)n.push(n[r-1]+ns(t[r-1],t[r]));const o=n[n.length-1],s=[];for(let r=0;r<e;r++){const i=o*r/(e-1);let a=1;for(;a<t.length-1&&n[a]<i;)a++;const c=n[a]-n[a-1];s.push(Wt(t[a-1],t[a],c>0?(i-n[a-1])/c:0))}return s}function ao(t,e,n){const o=c=>{const l=new Map;for(const h of c)l.set(h.material,[...l.get(h.material)??[],h]);return l},s=o(t),r=o(e),i=c=>{const l=[0,0,0];for(const h of c.points)for(let f=0;f<3;f++)l[f]+=h[f]/c.points.length;return l},a=[];for(const c of new Set([...s.keys(),...r.keys()])){const l=s.get(c)??[],h=r.get(c)??[];for(let f=0;f<Math.max(l.length,h.length);f++){const u=Math.max(l[f]?.points.length??0,h[f]?.points.length??0),m=l[f]?hn(l[f].points,u):null,d=h[f]?hn(h[f].points,u):null,p=m??Array.from({length:u},()=>i(h[f])),y=d??Array.from({length:u},()=>i(l[f])),v=bt(l[f]?.radius??0,h[f]?.radius??0,n);if(v<os)continue;const A=(n<.5?l[f]??h[f]:h[f]??l[f]).motion;a.push({material:c,radius:v,points:p.map((w,I)=>Wt(w,y[I],n)),...A?{motion:A}:{}})}}return a}function lo(t,e,n=0){const o=t[0],s=t[1],r=t[2],i=t[3],a=t[4],c=t[5],l=t[6],h=t[7],f=t[8],u=a*f-c*h,m=-(i*f-c*l),d=i*h-a*l,p=o*u+s*m+r*d,y=1/p;return e[n+0]=u*y,e[n+3]=m*y,e[n+6]=d*y,e[n+1]=-(s*f-r*h)*y,e[n+4]=(o*f-r*l)*y,e[n+7]=-(o*h-s*l)*y,e[n+2]=(s*c-r*a)*y,e[n+5]=-(o*c-r*i)*y,e[n+8]=(o*a-s*i)*y,p}function rs(t,e=[0,0,0,1],n=20){for(let o=0;o<n;o++){const s=Oe(e);let r=0,i=0,a=0,c=0;for(let y=0;y<3;y++){const v=s[3*y],A=s[3*y+1],w=s[3*y+2],I=t[3*y],z=t[3*y+1],C=t[3*y+2];r+=A*C-w*z,i+=w*I-v*C,a+=v*z-A*I,c+=v*I+A*z+w*C}const l=1/(Math.abs(c)+1e-9);r*=l,i*=l,a*=l;const h=Math.hypot(r,i,a);if(h<1e-9)break;const f=h/2,u=Math.sin(f)/h,m=[r*u,i*u,a*u,Math.cos(f)],d=co(m,e),p=Math.hypot(d[0],d[1],d[2],d[3]);e[0]=d[0]/p,e[1]=d[1]/p,e[2]=d[2]/p,e[3]=d[3]/p}return Oe(e)}function co(t,e){return[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]]}function Oe(t){const[e,n,o,s]=t;return[1-2*(n*n+o*o),2*(e*n+o*s),2*(e*o-n*s),2*(e*n-o*s),1-2*(e*e+o*o),2*(n*o+e*s),2*(e*o+n*s),2*(n*o-e*s),1-2*(e*e+n*n)]}function tr(t,e,n,o){const s=Math.hypot(t,e,n)||1,r=Math.sin(o/2)/s;return Oe([t*r,e*r,n*r,Math.cos(o/2)])}function ae(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const fn=(t,e,n=M.Cytoplasm)=>({kind:j.Ellipsoid,material:n,a:t,b:e,R:0,r:0}),ho=(t,e,n,o,s=M.Cytoplasm)=>({kind:j.Cone,material:s,a:t,b:e,R:n,r:o}),Re=(t,e=0)=>({prim:t,op:"union",blend:e}),St=t=>{const e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function fo(t){return{...t,bounds:eo(t.body)}}function le(t,e,n,o,s){if(!(e.length<2)){t.tubules.push({points:e,radius:n,material:o});for(let r=0;r+1<e.length;r++)t.organelles.push({kind:j.Capsule,material:o,a:e[r],b:e[r+1],R:0,r:n})}}function un(t,e,n,o){for(let s=0;s<400;s++){const r=[e[0]+t()*(n[0]-e[0]),e[1]+t()*(n[1]-e[1]),e[2]+t()*(n[2]-e[2])];if(o(r))return r}return null}function uo(t){const e=St(t.b);return[t.a[0]+e[0]*t.R,t.a[1]+e[1]*t.R,t.a[2]+e[2]*t.R]}function mo(t,e,n,o,s,r){const i=St(e),a=Math.min(.999,o/2/n);return{kind:j.Bowl,material:r,a:t,b:[i[0]*a,i[1]*a,i[2]*a],R:n,r:s}}function po(t,e,n,o,s){const r=St(e),i=[t];for(let a=o;a<=n+1e-9;a+=o){const c=[t[0]+r[0]*a,t[1]+r[1]*a,t[2]+r[2]*a];if(!s(c))break;i.push(c)}return i}function dn(t,e,n){return e.find(o=>me(t,o[0],o[1],o[2])===n)??e[0]}function mn(t){return 4/3*Math.PI*t[0]*t[1]*t[2]}function go(t){return Math.cbrt(3*t/(4*Math.PI))}const bo={ncRatio:.07};function pn(t){return go(bo.ncRatio*t)}const ce={perMother:8,radiusUm:.13},Tt={centre:[0,0,0],radii:[2.5,2.3,2.3]},Ee={radii:[1.6,1.45,1.45]},kt=t=>{const e=Math.hypot(...t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Ve(t,e,n){const o=kt(e),r=1/Math.hypot(o[0]/t.radii[0],o[1]/t.radii[1],o[2]/t.radii[2])-n;return[t.centre[0]+o[0]*r,t.centre[1]+o[1]*r,t.centre[2]+o[2]*r]}function yo(t,e){return kt([(e[0]-t.centre[0])/t.radii[0]**2,(e[1]-t.centre[1])/t.radii[1]**2,(e[2]-t.centre[2])/t.radii[2]**2])}function vo(t,e,n,o,s,r){let i;do i=kt([e()*2-1,e()*2-1,e()*2-1]);while(n(i));let a=kt([e()-.5,e()-.5,e()-.5]);const c=[Ve(t,i,r)],l=(t.radii[0]+t.radii[1]+t.radii[2])/3;for(let h=0;h<o;h++){const f=a[0]*i[0]+a[1]*i[1]+a[2]*i[2];a=kt([a[0]-f*i[0]+(e()-.5)*.9,a[1]-f*i[1]+(e()-.5)*.9,a[2]-f*i[2]+(e()-.5)*.9]);const u=s/l,m=kt([i[0]+a[0]*u,i[1]+a[1]*u,i[2]+a[2]*u]);if(n(m))break;i=m,c.push(Ve(t,i,r))}return c}function Ie(t,e){let n=0,o=4;for(let s=0;s<40;s++){const r=(n+o)/2;vt(t,e,Tt.centre[1],r+Tt.centre[2])<0?n=r:o=r}return n}const Ce={of:0,at:[-.46,.44,.1],r:[.4,.3,.42]},Ht=(t,e)=>({of:t,at:[.42*e,.46,.1],r:[.36,.27,.36]}),gn=[{bud:0,budX:0,neckBlend:0,nuclei:[{c:[.75,.3,.2],share:1}],nucleoli:[Ce],budTubules:0,budVacuole:0,septins:0,ring:0},{bud:.45,budX:3.1,neckBlend:.35,nuclei:[{c:[.95,.15,.1],share:1}],nucleoli:[Ce],budTubules:1,budVacuole:0,septins:1,ring:1,vacuoleStream:[[.1,-.5,-.5],[1,-1.15,-.75],[1.75,-.75,-.45]]},{bud:1,budX:3.75,neckBlend:.5,nuclei:[{c:[1.15,.15,.1],share:1}],nucleoli:[Ce],spindle:[[.4,.15,.1],[1.9,.15,.1]],budTubules:3,budVacuole:.5,septins:1,ring:1},{bud:1.08,budX:3.95,neckBlend:.45,nuclei:[{c:[.95,.12,.1],share:.5},{c:[4.1,.05,.1],share:.36}],bridge:{a:[1.5,.1,.1],b:[3.6,.05,.1],r:.26},nucleoli:[Ht(0,1)],spindle:[[.35,.12,.1],[4.6,.05,.1]],budTubules:3,budVacuole:.5,septins:1,ring:1},{bud:1.14,budX:4.1,neckBlend:.3,nuclei:[{c:[.75,.12,.1],share:-1},{c:[4.35,.05,.1],share:-1}],nucleoli:[Ht(0,1),Ht(1,-1)],budTubules:3,budVacuole:.55,septins:2,ring:1,neck:{r:.8,a:2.15,b:2.75}},{bud:1.16,budX:4.45,neckBlend:.15,nuclei:[{c:[.6,.12,.1],share:-1},{c:[4.65,.05,.1],share:-1}],nucleoli:[Ht(0,1),Ht(1,-1)],budTubules:3,budVacuole:.6,septins:2,ring:1,cytokinesis:!0,neck:{r:.42,a:2.2,b:2.9}}],wo=.018,Mo=[{name:"G1",title:"Unbudded",blurb:"The cell grows and decides whether to divide. There is no bud yet; the bud scars show where earlier daughters left. The nucleolus sits on the far side of the nucleus from the spindle pole body."},{name:"S",title:"Bud emergence",blurb:"DNA is replicated while a septin ring marks the neck, with a ring of myosin II inside it, and a small bud starts to grow. Mitochondria and a stream of vacuole membrane are already being pulled in."},{name:"G2/M",title:"Budded",blurb:"The bud grows and the nucleus migrates to the neck with a short spindle inside it, pointing at the bud. The nucleus has grown with the cell: it stays near 7 % of the cell volume (Jorgensen et al. 2007)."},{name:"Ana",title:"Anaphase",blurb:"Closed mitosis: the nuclear envelope stays intact, and the nucleus stretches through the neck into a dumbbell as the spindle elongates. The nucleolus is the last part to follow."},{name:"Telo",title:"Telophase",blurb:"The two nuclei separate and the spindle is taken apart. The septin collar splits into two rings, one on each side of the myosin ring."},{name:"Cyto",title:"Cytokinesis",blurb:"The actomyosin ring contracts to a point between the septin rings (Bi et al. 1998; Lippincott et al. 2001) while a chitin septum closes the neck behind it. Then the daughter is released, leaving a bud scar on her mother."}];function xo(t=7,e=2){const n=gn[Math.max(0,Math.min(gn.length-1,e))],o=ae(t),s=Tt,r={centre:[n.budX,0,.1],radii:[Ee.radii[0]*n.bud,Ee.radii[1]*n.bud,Ee.radii[2]*n.bud]},i=fo({cellType:"yeast",stage:e,body:[Re(fn(s.centre,s.radii)),...n.bud>0?[Re(fn(r.centre,r.radii),n.neckBlend)]:[],...n.neck?[Re(ho([n.neck.a,0,.05],[n.neck.b,0,.05],n.neck.r,n.neck.r),.15)]:[]],wallThickness:.18,cortexDepth:.3,mesh:{minSpacing:.36,maxSpacing:e>=3?.6:.72,minParticles:120,skinGrid:.11},organelles:[],tubules:[],seed:t}),a=mn(s.radii),c=mn(r.radii),l=n.nuclei.map((b,g)=>{const P=b.share<0?pn(g===0?a:c):pn(a+c)*Math.cbrt(b.share);return[1.03*P,.99*P,.98*P]}),h=[],f=(b,g,P,S,V=0,N=0)=>h.push({kind:b,material:g,a:P,b:S,R:V,r:N});if(n.bud>0){let b=2.2,g=1/0;for(let N=1.6;N<=n.budX;N+=.02){const K=Ie(i,N);K<g&&(g=K,b=N)}const P=N=>Math.max(.2,Ie(i,N)-i.wallThickness-.2),S=.06;let V=Math.max(.1,P(b)-.17);if(n.cytokinesis&&(V=.08,f(j.Disc,M.Septum,[b,0,0],[.05,0,0],Ie(i,b)-.05,V+S+.01),i.fission={n:[1,0,0],d:b}),n.septins===1)f(j.Torus,M.Septin,[b,0,0],[1,0,0],P(b),.1);else for(const N of[-.16,.16])f(j.Torus,M.Septin,[b+N,0,0],[1,0,0],P(b+N),.09);n.ring>0&&f(j.Torus,M.Ring,[b,0,0],[1,0,0],V,n.cytokinesis?.05:S)}const u=()=>(o()-.5)*.25;for(const b of[[-.85,.4,.35],[-.55,-.25,.8],[-.7,.62,-.35]]){const g=kt([b[0]+u(),b[1]+u(),b[2]+u()]),P=Ve(s,g,0);f(j.Torus,M.BudScar,P,yo(s,P),.36,.09)}const m={organelles:h,tubules:i.tubules};n.spindle&&le(m,n.spindle,.05,M.Spindle);for(const b of n.nucleoli){const g=n.nuclei[b.of].c,P=l[b.of][0],S=P/.975;f(j.Ellipsoid,M.Nucleolus,[g[0]+b.at[0]*P,g[1]+b.at[1]*P,g[2]+b.at[2]*P],[b.r[0]*S,b.r[1]*S,b.r[2]*S])}n.nuclei.forEach((b,g)=>f(j.Ellipsoid,M.Nucleus,b.c,l[g])),n.bridge&&f(j.Capsule,M.Nucleus,n.bridge.a,n.bridge.b,0,n.bridge.r);const d=(b,g,P,S)=>{for(let V=0;V<g;V++){o();const N=.17,K=vo(b,o,S,P+Math.floor(o()*3),.55,.36);le(m,K,N,M.Mitochondrion)}};if(d(s,8,5,b=>n.bud>0&&b[0]>.72),n.budTubules&&d(r,n.budTubules,n.bud<.7?1:3,b=>b[0]<-.6),f(j.Ellipsoid,M.Vacuole,[-.85,-.15,-.1],[1.15,1.1,1.1]),f(j.Ellipsoid,M.Vacuole,[-.35,.95,.8],[.5,.46,.46]),n.budVacuole){const b=n.budVacuole;f(j.Ellipsoid,M.Vacuole,[r.centre[0]+.2*n.bud,.1,-.25*n.bud],[b,b*.9,b*.9])}n.vacuoleStream&&le(m,n.vacuoleStream,.1,M.Vacuole);const p=ae(t+311),y=()=>St([(p()-.5)*.9,p()-.5,p()-.5]),v=(b,g)=>{const P=Math.min(b.radii[1],b.radii[2])-i.wallThickness-.06;if(!(P<.6))for(let S=0;S<g;S++)h.push(mo(b.centre,y(),P,Math.min(1.5*P,1.4+p()*.8),wo,M.ER))};v(s,5),v(r,Math.round(5*c/a));const A=b=>g=>vt(i,g[0],g[1],g[2])<-(i.wallThickness+b)&&h.every(P=>Gt(P,g[0],g[1],g[2])>b),w=n.nuclei[0].c,I=l[0][0];for(const b of[St([-.2,.7,.7]),St([-.5,-.6,.6])]){const g=[w[0]+b[0]*(I+.04),w[1]+b[1]*(I+.04),w[2]+b[2]*(I+.04)],P=po(g,b,3,.3,S=>vt(i,S[0],S[1],S[2])<-(i.wallThickness+.1)&&h.every(V=>V.material===M.ER||V.material===M.Nucleus||Gt(V,S[0],S[1],S[2])>.05));le(m,P,.03,M.ER)}const z=ae(t+523);for(const[b,g]of[[s,9],[r,Math.round(9*c/a)]])for(let P=0;P<g;P++){const S=un(z,[b.centre[0]-b.radii[0],b.centre[1]-b.radii[1],b.centre[2]-b.radii[2]],[b.centre[0]+b.radii[0],b.centre[1]+b.radii[1],b.centre[2]+b.radii[2]],A(.24)),V=St([z()-.5,z()-.5,z()-.5]);S&&f(j.Disc,M.Golgi,S,[V[0]*.018,V[1]*.018,V[2]*.018],.19,0)}const C=ae(t+977),E=ce.radiusUm,k=b=>vt(i,b[0],b[1],b[2])<-(i.wallThickness+2*E)&&h.every(g=>Gt(g,b[0],b[1],b[2])>2*E);for(const[b,g]of[[s,ce.perMother],[r,Math.round(ce.perMother*c/a)]])for(let P=0;P<g;P++){const S=un(C,[b.centre[0]-b.radii[0],b.centre[1]-b.radii[1],b.centre[2]-b.radii[2]],[b.centre[0]+b.radii[0],b.centre[1]+b.radii[1],b.centre[2]+b.radii[2]],k);S&&f(j.Ellipsoid,M.Condensate,S,[E,E,E])}return i.organelles=h,i}function ko(t){const e=C=>t.organelles.filter(E=>E.material===C),[n,o]=e(M.Nucleus).filter(C=>C.kind===j.Ellipsoid),[s,r]=e(M.Nucleolus),i=e(M.Septin)[0],a=e(M.Nucleus).find(C=>C.kind===j.Capsule),c=e(M.BudScar)[0],l=e(M.Vacuole)[0],h=t.tubules.find(C=>C.material===M.Mitochondrion).points,f=t.tubules.find(C=>C.material===M.Spindle)?.points,u=e(M.Ring)[0],m=e(M.Septum)[0],d=t.body[1]?.prim,p=(C,E,k)=>[C[0]-E[0]*k,C[1]-E[1]*k,C[2]-E[2]*k],y=(C,E)=>{if(!E)return[C.a[0],C.a[1]+.45*Math.min(...C.b),C.a[2]];const k=kt([C.a[0]-E.a[0],C.a[1]-E.a[1],C.a[2]-E.a[2]]),b=.45*Math.min(...C.b);return[C.a[0]+k[0]*b,C.a[1]+k[1]*b,C.a[2]+k[2]*b]},v=[{id:"nucleus",name:"Nucleus",material:M.Nucleus,anchor:y(n,s),size:"≈ 2 µm across",blurb:"Holds the 16 chromosomes. In budding yeast the nuclear envelope never breaks down: the nucleus squeezes through the neck and divides between mother and bud. The dots are nuclear pores: 65 to 182 per nucleus, more as the cycle goes on, with no regular spacing (Winey et al. 1997)."},{id:"nucleolus",name:"Nucleolus",material:M.Nucleolus,anchor:s.a,size:"≈ 0.8 µm",blurb:"A crescent against the nuclear envelope where ribosomal RNA is made and ribosomes are assembled. In interphase it lies opposite the spindle pole body (Yang et al. 1989); in anaphase it is the last part of the nucleus to divide."},{id:"vacuole",name:"Vacuole",material:M.Vacuole,anchor:l.a,size:"up to ≈ 2.5 µm",blurb:"The yeast lysosome: stores amino acids and ions, degrades proteins, and buffers the cell against osmotic stress by swelling or fragmenting."},{id:"mito",name:"Mitochondria",material:M.Mitochondrion,anchor:bn(h[0],h[1],.5),size:"0.34 µm thick",blurb:"A branched tubular network just under the cortex, 339 ± 5 nm thick in cells grown on glucose (Egner et al. 2002). Tubules fuse and divide all the time. The network is pulled into the bud so the daughter inherits her share. The stripes stand for cristae, drawn much further apart than they are."},{id:"wall",name:"Cell wall",material:M.Wall,anchor:[Tt.centre[0],Tt.centre[1]+Tt.radii[1]-.08,Tt.centre[2]],size:"≈ 0.1–0.2 µm thick",blurb:"Glucans, mannoproteins and chitin. Far stiffer than the cytoplasm: it resists the cell's turgor pressure of several atmospheres."},{id:"scar",name:"Bud scar",anchor:p(c.a,c.b,.1),size:"≈ 1 µm ring",blurb:"A chitin ring left on the mother at each division. Counting scars tells you how many daughters she has had (the record is a few dozen)."}];let A=null;if(i)for(let C=i.r*.9;C>-i.r&&!A;C-=.01){const E=[i.a[0],i.a[1],i.a[2]+i.R+C];me(t,...E)===M.Septin&&(A=E)}A&&v.push({id:"septin",name:"Septin ring",material:M.Septin,anchor:A,size:"≈ 1 µm ring",blurb:"Filaments that form an hourglass collar at the neck. They act as a diffusion barrier between mother and bud and mark where the cell will divide; at cytokinesis the collar splits into two rings."}),d&&v.push({id:"bud",name:"Bud (daughter)",anchor:[d.a[0]-.25*d.b[0],d.a[1]-.3*d.b[1],d.a[2]+.2*d.b[2]],size:`≈ ${(2*d.b[0]).toFixed(1)} µm`,blurb:"The daughter cell growing out of the mother. Growth is polarised toward the bud tip until it is almost as large as its mother."}),a&&v.push({id:"bridge",name:"Anaphase bridge",material:M.Nucleus,anchor:[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2,(a.a[2]+a.b[2])/2+.15],size:"≈ 0.5 µm thick",blurb:"The nucleus stretched through the neck by the elongating spindle, pulling one set of chromosomes into the bud."}),o&&v.push({id:"daughter-nucleus",name:"Daughter nucleus",material:M.Nucleus,anchor:y(o,r),size:"≈ 1.5 µm",blurb:"The daughter's own nucleus, with a full set of chromosomes, already in the bud."}),f&&v.push({id:"spindle",name:"Spindle",material:M.Spindle,anchor:bn(f[0],f[1],a?.08:.5),size:a?"≈ 4 µm and growing":"≈ 1.5 µm",blurb:a?"Microtubules between the two spindle pole bodies, inside the envelope. A fast phase of elongation carries one pole through the neck; a slower one takes the spindle to its full length (Yeh et al. 1995).":"A short bar of microtubules inside the nucleus, between the two spindle pole bodies embedded in its envelope. It is already aimed through the neck."}),u&&t.stage>=4&&v.push({id:"ring",name:"Contractile ring",material:M.Ring,anchor:[u.a[0],u.a[1],u.a[2]+u.R],size:"a thin band, drawn thicker",blurb:t.stage===5?"Myosin II and actin, contracting to a point. Yeast can divide without it, more slowly: the septum does much of the work (Bi et al. 1998).":"Myosin II has sat at the neck since the bud emerged. At the end of anaphase actin joins it, and the ring is ready to contract (Bi et al. 1998)."});const w=e(M.ER).filter(C=>C.kind===j.Bowl),I=e(M.Golgi);w.length&&v.push({id:"er",name:"Cortical ER",material:M.ER,anchor:dn(t,w.map(uo),M.ER),size:"sheets ≈ 36 nm thick",blurb:"The endoplasmic reticulum of yeast is the nuclear envelope plus a peripheral network of tubules and sheets, most of it lying flat against the plasma membrane and pierced by holes (West et al. 2011). A few tubules join it to the nuclear envelope. It is pulled into the bud early, so the daughter inherits hers. Only patches of the cortical sheet and two tubules are drawn."}),I.length&&v.push({id:"golgi",name:"Golgi cisterna",material:M.Golgi,anchor:dn(t,I.map(C=>C.a),M.Golgi),size:"drawn ≈ 0.4 µm across",blurb:"In baker's yeast the Golgi is not a stack. Its cisternae lie scattered singly through the cytoplasm, each maturing from an early to a late compartment over a few minutes; the stacked Golgi of other yeasts and of animal cells is the same machinery kept together (Rossanese et al. 1999). The number and size drawn are not measured values."});const z=e(M.Condensate)[0];return z&&v.push({id:"granule",name:"Stress granule",material:M.Condensate,anchor:z.a,size:`drawn ${(2*ce.radiusUm).toFixed(2)} µm across`,blurb:"Poly(A)-binding protein Pab1 and other RNA-binding proteins, gathered with mRNA into a solid-like assembly by severe heat (46 °C). The granules form within minutes; once the heat is gone the disaggregase Hsp104 takes them apart again, within about an hour, and the proteins are reused, not degraded (Wallace et al. 2015; Cherkasov et al. 2013). At 42 °C the same proteins assemble into particles too small to see. The number and size of the granules drawn here are not measured values."}),m&&v.push({id:"septum",name:"Septum",material:M.Septum,anchor:[m.a[0],m.a[1],m.a[2]+m.r+.04],size:"",blurb:"A plate of chitin that grows inward behind the ring and seals the neck. What is left of it on the mother is the bud scar."}),v}function bn(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n]}const Po={id:"yeast",name:"Budding yeast",title:["Budding","Yeast."],tagline:["A mother and her bud.","A little wobble.","Cut it open to look inside."],umPerUnit:1,build:xo,labels:ko,stages:Mo,stageLabel:"Cell cycle",defaultStage:2,key:[{material:M.Wall,name:"Cell wall"},{material:M.Cytoplasm,name:"Cytoplasm"},{material:M.Nucleus,name:"Nucleus"},{material:M.Nucleolus,name:"Nucleolus"},{material:M.Vacuole,name:"Vacuole"},{material:M.Mitochondrion,name:"Mitochondria"},{material:M.ER,name:"ER"},{material:M.Golgi,name:"Golgi cisternae"},{material:M.Spindle,name:"Spindle"},{material:M.Septin,name:"Septin ring"},{material:M.Ring,name:"Myosin ring"},{material:M.Septum,name:"Septum"},{material:M.BudScar,name:"Bud scars"},{material:M.Condensate,name:"Stress granules"}],stiffness:{[M.Wall]:4,[M.Nucleus]:2,[M.Nucleolus]:2.5,[M.Vacuole]:.7,[M.Mitochondrion]:1.3,[M.Septin]:3,[M.BudScar]:4,[M.Spindle]:2.5,[M.Ring]:3,[M.Septum]:4},camera:{dist:21,yaw:-.42,pitch:.6},help:"Grab any part (mother, bud or neck) and pull.",about:"Saccharomyces cerevisiae, baker's yeast, dividing by budding. The mother (≈ 5 µm) grows a daughter through a narrow neck ringed by septins. A stiff cell wall makes the whole thing much firmer than an animal cell. Play the cycle to the end and the daughter leaves."},De=[Po];function he(t){const e=De.find(n=>n.id===t);if(!e)throw new Error(`Unknown cell type ${t}`);return e}const yn=new Map;function It(t,e=7,n){const o=he(t),s=(o.stages?.length??1)-1,r=Math.max(0,Math.min(s,n??o.defaultStage??0)),i=Math.floor(r);if(r>i)return so(It(t,e,i),It(t,e,i+1),r-i);const a=`${t}:${e}:${r}`;let c=yn.get(a);return c||(c=o.build(e,r),yn.set(a,c)),c}function vn(t,e,n){return he(t).labels(It(t,e,Math.round(n)))}const Ao=.12;function So(t,e,n,o,s,r){const i=[e,n,o,s];let a=0;for(let c=0;c<4;c++)for(let l=c+1;l<4;l++)a+=(t[3*i[c]]-t[3*i[l]])**2+(t[3*i[c]+1]-t[3*i[l]+1])**2+(t[3*i[c]+2]-t[3*i[l]+2])**2;return 6*Math.SQRT2*r/Math.pow(a/6,1.5)}function as(t,e,n,o,s){const r=t[3*e],i=t[3*e+1],a=t[3*e+2],c=t[3*n]-r,l=t[3*n+1]-i,h=t[3*n+2]-a,f=t[3*o]-r,u=t[3*o+1]-i,m=t[3*o+2]-a,d=t[3*s]-r,p=t[3*s+1]-i,y=t[3*s+2]-a;return(c*(u*y-m*p)-l*(f*y-m*d)+h*(f*p-u*d))/6}function ls(t){const e=t.mesh.pad??.3;return{lo:t.bounds.lo.map(n=>n-e),hi:t.bounds.hi.map(n=>n+e)}}function To(t,e=t.mesh.volumeStep??.2){const{lo:n,hi:o}=ls(t);let s=0;for(let r=n[0]+e/2;r<o[0];r+=e)for(let i=n[1]+e/2;i<o[1];i+=e)for(let a=n[2]+e/2;a<o[2];a+=e)t.sdf(r,i,a)<0&&s++;return s*e**3}function Ro(t){const e=To(t),n=t.mesh;return Math.min(n.maxSpacing,Math.max(n.minSpacing,Math.cbrt(2*e/n.minParticles)))}function Eo(t,e=Ro(t)){const n=e,o=t.sdf,{lo:s,hi:r}=ls(t),i=s[0]-n+.0137,a=s[1]-n+.0231,c=s[2]-n+.0079,l=Math.ceil((r[0]-i)/n)+1,h=Math.ceil((r[1]-a)/n)+1,f=Math.ceil((r[2]-c)/n)+1,u=(l+1)*(h+1)*(f+1),m=l*h*f,d=(k,b,g)=>k+(l+1)*(b+(h+1)*g),p=(k,b,g)=>u+k+l*(b+h*g),y=new Float64Array((u+m)*3);for(let k=0;k<=f;k++)for(let b=0;b<=h;b++)for(let g=0;g<=l;g++){const P=d(g,b,k)*3;y[P]=i+g*n,y[P+1]=a+b*n,y[P+2]=c+k*n}for(let k=0;k<f;k++)for(let b=0;b<h;b++)for(let g=0;g<l;g++){const P=p(g,b,k)*3;y[P]=i+(g+.5)*n,y[P+1]=a+(b+.5)*n,y[P+2]=c+(k+.5)*n}const v=[],A=(k,b,g,P)=>{const S=(y[3*k]+y[3*b]+y[3*g]+y[3*P])/4,V=(y[3*k+1]+y[3*b+1]+y[3*g+1]+y[3*P+1])/4,N=(y[3*k+2]+y[3*b+2]+y[3*g+2]+y[3*P+2])/4;o(S,V,N)<.25*n&&v.push(k,b,g,P)},w=(k,b,g)=>{for(let P=0;P<4;P++)A(k,b,g[P],g[(P+1)%4])};for(let k=0;k<f;k++)for(let b=0;b<h;b++)for(let g=0;g<l;g++){const P=p(g,b,k);g+1<l&&w(P,p(g+1,b,k),[d(g+1,b,k),d(g+1,b+1,k),d(g+1,b+1,k+1),d(g+1,b,k+1)]),b+1<h&&w(P,p(g,b+1,k),[d(g,b+1,k),d(g+1,b+1,k),d(g+1,b+1,k+1),d(g,b+1,k+1)]),k+1<f&&w(P,p(g,b,k+1),[d(g,b,k+1),d(g+1,b,k+1),d(g+1,b+1,k+1),d(g,b+1,k+1)])}const I=new Uint8Array(u+m);for(const k of v)I[k]=1;for(let k=0;k<I.length;k++){if(!I[k])continue;let b=y[3*k],g=y[3*k+1],P=y[3*k+2],S=o(b,g,P);if(!(S<0)){for(let V=0;V<6&&Math.abs(S)>1e-4;V++){const N=$t(o,b,g,P);b-=S*N[0],g-=S*N[1],P-=S*N[2],S=o(b,g,P)}y[3*k]=b,y[3*k+1]=g,y[3*k+2]=P}}const z=[];for(let k=0;k<v.length;k+=4){let[b,g,P,S]=[v[k],v[k+1],v[k+2],v[k+3]],V=as(y,b,g,P,S);V<0&&([P,S]=[S,P],V=-V),So(y,b,g,P,S,V)>Ao&&z.push(b,g,P,S)}const C=E(y,z,n);return Io(C,t.material,20);function E(k,b,g){const P=new Int32Array(k.length/3).fill(-1);let S=0;for(const N of b)P[N]<0&&(P[N]=S++);const V=new Float32Array(S*3);for(let N=0;N<P.length;N++)P[N]>=0&&V.set(k.subarray(3*N,3*N+3),3*P[N]);return{rest:V,tets:Uint32Array.from(b,N=>P[N]),spacing:g}}}function cs(t,e){const n=new Int32Array(e).map((r,i)=>i),o=r=>{for(;n[r]!==r;)n[r]=n[n[r]],r=n[r];return r};for(let r=0;r<t.length;r+=4)for(let i=1;i<4;i++){const a=o(t[r]),c=o(t[r+i]);a!==c&&(n[a]=c)}const s=new Int32Array(t.length/4);for(let r=0;r<s.length;r++)s[r]=o(t[4*r]);return s}function Io(t,e,n){const o=cs(t.tets,t.rest.length/3),s=new Map;for(const i of o)s.set(i,(s.get(i)??0)+1);const r=[];for(let i=0;i<o.length;i++)(s.get(o[i])??0)>=n&&r.push(...t.tets.subarray(4*i,4*i+4));return hs(e,t.rest,Uint32Array.from(r),t.spacing)}function hs(t,e,n,o){const s=new Int32Array(e.length/3).fill(-1);let r=0;for(const v of n)s[v]<0&&(s[v]=r++);const i=new Float32Array(r*3);for(let v=0;v<s.length;v++)s[v]>=0&&i.set(e.subarray(3*v,3*v+3),3*s[v]);const a=Uint32Array.from(n,v=>s[v]),c=a.length/4,l=new Float32Array(c*9),h=new Float32Array(c),f=new Uint8Array(c),u=new Float64Array(r),m=new Float64Array(9);for(let v=0;v<c;v++){const A=a[4*v]*3;for(let E=0;E<3;E++){const k=a[4*v+1+E]*3;for(let b=0;b<3;b++)m[3*E+b]=i[k+b]-i[A+b]}const w=lo(m,l,9*v);h[v]=w/6;let I=0,z=0,C=0;for(let E=0;E<4;E++){const k=a[4*v+E];u[k]+=h[v]/4,I+=i[3*k]/4,z+=i[3*k+1]/4,C+=i[3*k+2]/4}f[v]=t(I,z,C)}const d=Float32Array.from(u,v=>v>0?1/v:0),p=new Set,y=[];for(let v=0;v<c;v++)for(let A=0;A<4;A++)for(let w=A+1;w<4;w++){const I=Math.min(a[4*v+A],a[4*v+w]),z=Math.max(a[4*v+A],a[4*v+w]),C=I*r+z;p.has(C)||(p.add(C),y.push(I,z))}return{restPos:i,pos:i.slice(),prevPos:i.slice(),vel:new Float32Array(r*3),invMass:d,tets:a,tetMaterial:f,restInv:l,restVol:h,edges:Uint32Array.from(y),spacing:o}}function Co(t,e,n,o){const s=t.sdf,r=t.uncut,i=t.planes,a=e[0]-2*o,c=e[1]-2*o,l=e[2]-2*o,h=Math.ceil((n[0]-a+2*o)/o),f=Math.ceil((n[1]-c+2*o)/o),u=Math.ceil((n[2]-l+2*o)/o),m=h+1,d=(h+1)*(f+1),p=new Float32Array(d*(u+1));for(let x=0;x<=u;x++)for(let R=0;R<=f;R++)for(let T=0;T<=h;T++)p[T+m*R+d*x]=s(a+T*o,c+R*o,l+x*o);const y=new Int32Array(h*f*u).fill(-1),v=[],A=[],w=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],I=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],z=new Float32Array(8);for(let x=0;x<u;x++)for(let R=0;R<f;R++)for(let T=0;T<h;T++){let F=0;for(let D=0;D<8;D++)z[D]=p[T+w[D][0]+m*(R+w[D][1])+d*(x+w[D][2])],z[D]<0&&F++;if(F===0||F===8)continue;let B=0,_=0,L=0,W=0;for(const[D,U]of I){if(z[D]<0==z[U]<0)continue;const H=z[D]/(z[D]-z[U]);B+=w[D][0]+H*(w[U][0]-w[D][0]),_+=w[D][1]+H*(w[U][1]-w[D][1]),L+=w[D][2]+H*(w[U][2]-w[D][2]),W++}let O=a+(T+B/W)*o,X=c+(R+_/W)*o,tt=l+(x+L/W)*o;for(let D=0;D<2;D++){const U=s(O,X,tt);if(Math.abs(U)<1e-5)break;const H=$t(s,O,X,tt);O-=U*H[0],X-=U*H[1],tt-=U*H[2]}y[T+h*(R+f*x)]=v.length/3,v.push(O,X,tt);let et=-1;if(i.length){let D=0;for(const U of w)r(a+(T+U[0])*o,c+(R+U[1])*o,l+(x+U[2])*o)<0&&D++;D>0&&D<8&&i.forEach((U,H)=>{let nt=0;for(const st of w)Ut(U,a+(T+st[0])*o,c+(R+st[1])*o,l+(x+st[2])*o)<0&&nt++;nt>0&&nt<8&&et<0&&(et=H)})}A.push(et)}const C=[],E=(x,R,T)=>y[x+h*(R+f*T)],k=(x,R,T,F,B)=>{if(x<0||R<0||T<0||F<0)return;B&&([R,F]=[F,R]);const _=wn(v,x,T),L=wn(v,R,F);_<L?C.push(x,R,T,x,T,F):C.push(x,R,F,R,T,F)};for(let x=1;x<u;x++)for(let R=1;R<f;R++)for(let T=1;T<h;T++){const F=p[T+m*R+d*x]<0;F!==p[T+1+m*R+d*x]<0&&k(E(T,R-1,x-1),E(T,R,x-1),E(T,R,x),E(T,R-1,x),!F),F!==p[T+m*(R+1)+d*x]<0&&k(E(T-1,R,x-1),E(T,R,x-1),E(T,R,x),E(T-1,R,x),F),F!==p[T+m*R+d*(x+1)]<0&&k(E(T-1,R-1,x),E(T,R-1,x),E(T,R,x),E(T-1,R,x),!F)}const b=v.length/3;for(let x=0;x<b;x++){if(A[x]<0)continue;const R=i[A[x]];let T=v[3*x],F=v[3*x+1],B=v[3*x+2];for(let _=0;_<6;_++){const L=r(T,F,B),W=$t(r,T,F,B);T-=L*W[0],F-=L*W[1],B-=L*W[2];const O=Ut(R,T,F,B);T-=O*R.n[0],F-=O*R.n[1],B-=O*R.n[2]}v[3*x]=T,v[3*x+1]=F,v[3*x+2]=B}const g=new Int8Array(b);for(let x=0;x<b;x++){const R=v[3*x],T=v[3*x+1],F=v[3*x+2];let B=r(R,T,F)+.002,_=-1;i.forEach((L,W)=>{const O=Ut(L,R,T,F);O>B&&(B=O,_=W)}),g[x]=_}const P=[],S=[],V=[],N=[],K=new Map,G=i.length+1,Y=(x,R)=>{const T=x*G+R+1;let F=K.get(T);if(F===void 0){F=P.length/3,K.set(T,F);let B=v[3*x],_=v[3*x+1],L=v[3*x+2];if(R>=0){const W=i[R],O=Ut(W,B,_,L);B-=O*W.n[0],_-=O*W.n[1],L-=O*W.n[2]}P.push(B,_,L),S.push(R>=0?1:0),N.push(...R>=0?i[R].n:$t(r,B,_,L))}return F};for(let x=0;x<C.length;x+=3){const R=C[x],T=C[x+1],F=C[x+2];let B=-1;if(g[R]>=0||g[T]>=0||g[F]>=0){const _=(v[3*R]+v[3*T]+v[3*F])/3,L=(v[3*R+1]+v[3*T+1]+v[3*F+1])/3,W=(v[3*R+2]+v[3*T+2]+v[3*F+2])/3;let O=r(_,L,W);i.forEach((X,tt)=>{const et=Ut(X,_,L,W);et>O&&(O=et,B=tt)})}V.push(Y(R,B),Y(T,B),Y(F,B))}return{pos:new Float32Array(P),idx:new Uint32Array(V),isCutFace:new Uint8Array(S),normal:new Float32Array(N)}}function wn(t,e,n){return(t[3*e]-t[3*n])**2+(t[3*e+1]-t[3*n+1])**2+(t[3*e+2]-t[3*n+2])**2}class pe{constructor(e,n=e.spacing){this.sim=e,this.cell=n,this.cells=new Map;const{restPos:o,tets:s}=e;for(let r=0;r<s.length/4;r++){const i=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let c=0;c<4;c++)for(let l=0;l<3;l++){const h=o[3*s[4*r+c]+l];i[l]=Math.min(i[l],h),a[l]=Math.max(a[l],h)}for(let c=this.q(i[0]);c<=this.q(a[0]);c++)for(let l=this.q(i[1]);l<=this.q(a[1]);l++)for(let h=this.q(i[2]);h<=this.q(a[2]);h++){const f=this.key(c,l,h),u=this.cells.get(f);u?u.push(r):this.cells.set(f,[r])}}}q(e){return Math.floor(e/this.cell)}key(e,n,o){return((e+512)*1024+(n+512))*1024+(o+512)}bary(e,n,o,s,r,i=0){const{restPos:a,tets:c,restInv:l}=this.sim,h=3*c[4*e],f=n-a[h],u=o-a[h+1],m=s-a[h+2],d=9*e,p=l[d]*f+l[d+3]*u+l[d+6]*m,y=l[d+1]*f+l[d+4]*u+l[d+7]*m,v=l[d+2]*f+l[d+5]*u+l[d+8]*m;r[i]=1-p-y-v,r[i+1]=p,r[i+2]=y,r[i+3]=v}locate(e,n,o){const s=new Float64Array(4);let r=-1,i=-1/0;const a=this.q(e),c=this.q(n),l=this.q(o);for(let h=0;h<=4&&(r<0||h<=1&&i<0);h++)for(let f=a-h;f<=a+h;f++)for(let u=c-h;u<=c+h;u++)for(let m=l-h;m<=l+h;m++){if(Math.max(Math.abs(f-a),Math.abs(u-c),Math.abs(m-l))!==h)continue;const d=this.cells.get(this.key(f,u,m));if(d)for(const p of d){this.bary(p,e,n,o,s);const y=Math.min(s[0],s[1],s[2],s[3]);y>i&&(i=y,r=p)}}return{tet:r,minBary:i}}}function fs(t,e){const n=e.length/3,o=new Uint32Array(n),s=new Float32Array(n*4),r=new Float32Array(n);for(let i=0;i<n;i++){const{tet:a,minBary:c}=t.locate(e[3*i],e[3*i+1],e[3*i+2]);o[i]=Math.max(0,a),r[i]=a<0?-1/0:c,a>=0&&t.bary(a,e[3*i],e[3*i+1],e[3*i+2],s,4*i)}return{tetId:o,bary:s,minBary:r}}function us(t,e,n,o){const s=fs(t,e.pos),r=new Int32Array(e.pos.length/3).fill(-1),i=[];let a=0;for(let d=0;d<e.idx.length;d+=3){const p=e.idx[d],y=e.idx[d+1],v=e.idx[d+2];if(!(s.minBary[p]<-o||s.minBary[y]<-o||s.minBary[v]<-o))for(const A of[p,y,v])r[A]<0&&(r[A]=a++),i.push(r[A])}if(i.length===0)return null;const c=new Float32Array(a*3),l=new Uint32Array(a),h=new Float32Array(a*4),f=new Uint8Array(a),u=e.normal?new Float32Array(a*3):void 0,m=e.coord?new Float32Array(a):void 0;for(let d=0;d<r.length;d++){const p=r[d];p<0||(c.set(e.pos.subarray(3*d,3*d+3),3*p),l[p]=s.tetId[d],h.set(s.bary.subarray(4*d,4*d+4),4*p),f[p]=e.isCutFace[d],u&&u.set(e.normal.subarray(3*d,3*d+3),3*p),m&&(m[p]=e.coord[d]))}return{restPos:c,pos:c.slice(),normal:new Float32Array(a*3),idx:Uint32Array.from(i),tetId:l,bary:h,isCutFace:f,material:n,restNormal:u,...m?{coord:m}:{}}}function fe(t,e){const{pos:n,bary:o,tetId:s,normal:r,idx:i}=t,a=e.pos,c=e.tets;for(let l=0,h=s.length;l<h;l++){const f=4*s[l],u=4*l,m=3*c[f],d=3*c[f+1],p=3*c[f+2],y=3*c[f+3],v=o[u],A=o[u+1],w=o[u+2],I=o[u+3];n[3*l]=v*a[m]+A*a[d]+w*a[p]+I*a[y],n[3*l+1]=v*a[m+1]+A*a[d+1]+w*a[p+1]+I*a[y+1],n[3*l+2]=v*a[m+2]+A*a[d+2]+w*a[p+2]+I*a[y+2]}if(t.restNormal){Fo(t,e);return}r.fill(0);for(let l=0;l<i.length;l+=3){const h=3*i[l],f=3*i[l+1],u=3*i[l+2],m=n[f]-n[h],d=n[f+1]-n[h+1],p=n[f+2]-n[h+2],y=n[u]-n[h],v=n[u+1]-n[h+1],A=n[u+2]-n[h+2],w=d*A-p*v,I=p*y-m*A,z=m*v-d*y;r[h]+=w,r[h+1]+=I,r[h+2]+=z,r[f]+=w,r[f+1]+=I,r[f+2]+=z,r[u]+=w,r[u+1]+=I,r[u+2]+=z}for(let l=0;l<r.length;l+=3){const h=Math.hypot(r[l],r[l+1],r[l+2])||1;r[l]/=h,r[l+1]/=h,r[l+2]/=h}}function Fo(t,e){const{normal:n,tetId:o}=t,s=t.restNormal,r=e.pos,i=e.tets,a=e.restInv;let c=-1,l=1,h=0,f=0,u=0,m=1,d=0,p=0,y=0,v=1;for(let A=0,w=o.length;A<w;A++){const I=o[A];if(I!==c){c=I;const S=3*i[4*I],V=3*i[4*I+1],N=3*i[4*I+2],K=3*i[4*I+3],G=9*I,Y=r[V]-r[S],x=r[V+1]-r[S+1],R=r[V+2]-r[S+2],T=r[N]-r[S],F=r[N+1]-r[S+1],B=r[N+2]-r[S+2],_=r[K]-r[S],L=r[K+1]-r[S+1],W=r[K+2]-r[S+2],O=Y*a[G]+T*a[G+1]+_*a[G+2],X=x*a[G]+F*a[G+1]+L*a[G+2],tt=R*a[G]+B*a[G+1]+W*a[G+2],et=Y*a[G+3]+T*a[G+4]+_*a[G+5],D=x*a[G+3]+F*a[G+4]+L*a[G+5],U=R*a[G+3]+B*a[G+4]+W*a[G+5],H=Y*a[G+6]+T*a[G+7]+_*a[G+8],nt=x*a[G+6]+F*a[G+7]+L*a[G+8],st=R*a[G+6]+B*a[G+7]+W*a[G+8];l=D*st-U*nt,h=U*H-et*st,f=et*nt-D*H,u=nt*tt-st*X,m=st*O-H*tt,d=H*X-nt*O,p=X*U-tt*D,y=tt*et-O*U,v=O*D-X*et}const z=s[3*A],C=s[3*A+1],E=s[3*A+2],k=z*l+C*u+E*p,b=z*h+C*m+E*y,g=z*f+C*d+E*v,P=Math.hypot(k,b,g)||1;n[3*A]=k/P,n[3*A+1]=b/P,n[3*A+2]=g/P}}const zo=.6;function ds(t,e,n){const o=t.shape(e),s=Eo(o);if(s.tets.length===0)return[];const r=cs(s.tets,s.restPos.length/3),i=new Map;for(let u=0;u<r.length;u++){const m=i.get(r[u])??[];for(let d=0;d<4;d++)m.push(s.tets[4*u+d]);i.set(r[u],m)}const a=i.size===1?[s]:[...i.values()].map(u=>hs(o.material,s.restPos,Uint32Array.from(u),s.spacing)),{lo:c,hi:l}=Bo(s.restPos),h=Co(o,c,l,o.mesh.skinGrid),f=[];for(const u of a.sort((m,d)=>d.tets.length-m.tets.length)){const m=new pe(u),d=us(m,h,t.skinMaterial,zo);d&&(fe(d,u),f.push({id:n(),planes:e,sim:u,skin:d,organelles:t.organelles?.(e,u,m)??[]}))}return f}function No(t,e,n){const[o]=ds(t,e,()=>n);return o}function Bo(t){const e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let o=0;o<t.length;o+=3)for(let s=0;s<3;s++)e[s]=Math.min(e[s],t[o+s]),n[s]=Math.max(n[s],t[o+s]);return{lo:e,hi:n}}const Mn=128,Oo=32;function Kt(t,e){return{pos:new Float32Array(t),idx:new Uint32Array(e),isCutFace:new Uint8Array(t.length/3)}}function Vo(t,e,n=28,o=18){const s=[],r=[];for(let i=0;i<=o;i++){const a=Math.PI*i/o;for(let c=0;c<=n;c++){const l=2*Math.PI*c/n;s.push(t[0]+e[0]*Math.cos(a),t[1]+e[1]*Math.sin(a)*Math.cos(l),t[2]+e[2]*Math.sin(a)*Math.sin(l))}}for(let i=0;i<o;i++)for(let a=0;a<n;a++){const c=i*(n+1)+a,l=c+n+1;r.push(c,c+1,l,c+1,l+1,l)}return Kt(s,r)}function ge(t){const e=Math.abs(t[0])<.9?[1,0,0]:[0,1,0],n=_e(Le(t,e));return[n,Le(t,n)]}function Do(t,e,n,o,s=48,r=12){const[i,a]=ge(e),c=[],l=[];for(let h=0;h<=s;h++){const f=2*Math.PI*h/s,u=ht(ot(i,Math.cos(f)),ot(a,Math.sin(f)));for(let m=0;m<=r;m++){const d=2*Math.PI*m/r,p=ht(t,ht(ot(u,n+o*Math.cos(d)),ot(e,o*Math.sin(d))));c.push(...p)}}for(let h=0;h<s;h++)for(let f=0;f<r;f++){const u=h*(r+1)+f,m=u+r+1;l.push(u,m,u+1,u+1,m,m+1)}return Kt(c,l)}function Lo(t,e,n,o,s,r=48){const[i,a]=ge(e),c=[],l=[],h=s>1e-4?[[o,-n],[o,n],[s,n],[s,-n],[o,-n]]:[[0,-n],[o,-n],[o,n],[0,n]];for(let u=0;u<=r;u++){const m=2*Math.PI*u/r,d=ht(ot(i,Math.cos(m)),ot(a,Math.sin(m)));for(const[p,y]of h)c.push(...ht(t,ht(ot(d,p),ot(e,y))))}const f=h.length;for(let u=0;u<r;u++)for(let m=0;m+1<f;m++){const d=u*f+m,p=d+f;l.push(d,p,d+1,d+1,p,p+1)}return Kt(c,l)}function _o(t,e,n,o,s,r=24,i=8){const[a,c]=ge(e),l=Math.asin(Math.min(1,n)),h=s,f=[];for(let p=0;p<=i;p++){const y=l*p/i;f.push([(o+h)*Math.sin(y),(o+h)*Math.cos(y)])}for(let p=1;p<4;p++){const y=Math.PI*p/4;f.push([o*Math.sin(l)+h*Math.sin(l+y),o*Math.cos(l)+h*Math.cos(l+y)])}for(let p=i;p>=0;p--){const y=l*p/i;f.push([(o-h)*Math.sin(y),(o-h)*Math.cos(y)])}const u=[],m=[];for(let p=0;p<=r;p++){const y=2*Math.PI*p/r,v=ht(ot(a,Math.cos(y)),ot(c,Math.sin(y)));for(const[A,w]of f)u.push(...ht(t,ht(ot(v,A),ot(e,w))))}const d=f.length;for(let p=0;p<r;p++)for(let y=0;y+1<d;y++){const v=p*d+y,A=v+d;m.push(v,A,v+1,v+1,A,A+1)}return Kt(u,m)}function Uo(t,e,n=8,o=4){const s=[],r=w=>t[Math.max(0,Math.min(t.length-1,w))];for(let w=0;w<t.length-1;w++)for(let I=0;I<o;I++){const z=I/o,C=r(w-1),E=r(w),k=r(w+1),b=r(w+2),g=z*z,P=g*z;s.push([0,1,2].map(S=>.5*(2*E[S]+(-C[S]+k[S])*z+(2*C[S]-5*E[S]+4*k[S]-b[S])*g+(-C[S]+3*E[S]-3*k[S]+b[S])*P)))}s.push(t[t.length-1]);const i=s.map((w,I)=>_e(xn(s[Math.min(I+1,s.length-1)],s[Math.max(I-1,0)])));let[a]=ge(i[0]);const c=[];let l=0;const h=3;for(let w=0;w<s.length;w++){const I=i[w];a=_e(xn(a,ot(I,qo(a,I))));const z=Le(I,a);w>0&&(l+=Math.hypot(s[w][0]-s[w-1][0],s[w][1]-s[w-1][1],s[w][2]-s[w-1][2])),c.push({c:s[w],r:e,u:a,v:z,s:l})}const f=w=>{const I=w?c[c.length-1]:c[0],z=w?i[i.length-1]:ot(i[0],-1),C=[];for(let E=1;E<=h;E++){const k=Math.PI/2*E/(h+.001);C.push({c:ht(I.c,ot(z,e*Math.sin(k))),r:Math.max(.001,e*Math.cos(k)),u:I.u,v:I.v,s:I.s})}return C},u=[...f(0).reverse(),...c,...f(1)],m=[],d=[],p=[];for(const w of u)for(let I=0;I<=n;I++){const z=2*Math.PI*I/n;m.push(...ht(w.c,ht(ot(w.u,w.r*Math.cos(z)),ot(w.v,w.r*Math.sin(z))))),p.push(w.s)}for(let w=0;w+1<u.length;w++)for(let I=0;I<n;I++){const z=w*(n+1)+I,C=z+n+1;d.push(z,z+1,C,z+1,C+1,C)}const y=m.length/3;m.push(...ht(u[0].c,ot(i[0],-e*.02)));const v=m.length/3;m.push(...ht(u[u.length-1].c,ot(i[i.length-1],e*.02)));const A=(u.length-1)*(n+1);for(let w=0;w<n;w++)d.push(y,w+1,w),d.push(v,A+w,A+w+1);return p.push(0,l),{...Kt(m,d),coord:Float32Array.from(p,w=>Math.min(.999,w/Oo))}}function Go(t){const e=[],n=new Map,o=(s,r,i=!1)=>{const a=n.get(s)??0;n.set(s,a+1);const c=a%Mn+(i?Mn:0),l=r.pos.length/3,h=new Float32Array(l);for(let f=0;f<l;f++)h[f]=c+(r.coord?r.coord[f]:0);e.push({material:s,mesh:{...r,coord:h}})};for(const s of t.organelles){const r=Math.max(...s.b)<.45;if(s.kind===j.Ellipsoid)o(s.material,Vo(s.a,s.b,r?18:30,r?10:20));else if(s.kind===j.Torus&&s.material!==M.BudScar)o(s.material,Do(s.a,s.b,s.R,s.r));else if(s.kind===j.Disc){const i=Math.hypot(...s.b)||1e-6;o(s.material,Lo(s.a,[s.b[0]/i,s.b[1]/i,s.b[2]/i],i,s.R,s.r,s.R<.4?20:48))}else if(s.kind===j.Bowl){const i=Math.hypot(...s.b)||1e-6;o(s.material,_o(s.a,[s.b[0]/i,s.b[1]/i,s.b[2]/i],i,s.R,s.r,s.R*i<.3?14:28,s.R*i<.3?4:8))}}for(const s of t.tubules)o(s.material,Uo(s.points,s.radius,s.radius<.09?6:8,s.motion?8:4),!!s.motion);return e}function Wo(t){const e=t.reduce((l,h)=>l+h.pos.length,0),n=t.reduce((l,h)=>l+h.idx.length,0),o=new Float32Array(e),s=new Uint32Array(n),r=new Uint8Array(e/3),i=new Float32Array(e/3);let a=0,c=0;for(const l of t){o.set(l.pos,a),l.coord&&i.set(l.coord,a/3);for(let h=0;h<l.idx.length;h++)s[c+h]=l.idx[h]+a/3;r.set(l.isCutFace,a/3),a+=l.pos.length,c+=l.idx.length}return{pos:o,idx:s,isCutFace:r,coord:i}}function ht(t,e){return[t[0]+e[0],t[1]+e[1],t[2]+e[2]]}function xn(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2]]}function ot(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function qo(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Le(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function _e(t){const e=Math.hypot(...t)||1;return[t[0]/e,t[1]/e,t[2]/e]}function jo(t,e){return{sdf:(n,o,s)=>de(t,e,n,o,s),uncut:(n,o,s)=>vt(t,n,o,s),planes:e,material:(n,o,s)=>me(t,n,o,s,t.cortexDepth),bounds:t.bounds,mesh:t.mesh}}const kn=new WeakMap;function ms(t){let e=kn.get(t);return e||(e={shape:n=>jo(t,n),skinMaterial:M.Cytoplasm,organelles:(n,o,s)=>Yo(t,n,o,s)},kn.set(t,e)),e}const Pn=new WeakMap;function Ho(t){let e=Pn.get(t);return e||(e=Go(t),Pn.set(t,e)),e}function Yo(t,e,n,o){const s=new Map;for(const i of Ho(t)){const a=i.mesh.pos;let c=!1;for(let l=0;l<a.length&&!c;l+=3)de(t,e,a[l],a[l+1],a[l+2])<0&&o.locate(a[l],a[l+1],a[l+2]).minBary>-.3&&(c=!0);c&&s.set(i.material,[...s.get(i.material)??[],i.mesh])}const r=[];for(const[i,a]of s){const c=us(o,Wo(a),i,1/0);c&&(fe(c,n),r.push(c))}return r}const ps=(t,e,n)=>No(ms(t),e,n),Ue=3,Xo=981/Ue,$o=5e4,Ko=256;function Jo(t=[]){const e=new Array(Math.max(Ko,t.length)).fill(1);return t.forEach((n,o)=>{n!==void 0&&(e[o]=n)}),{firmness:.4,damping:.45,substeps:12,gravity:Xo,friction:.7,materialStiffness:e,volume:1}}function Zo(t){return $o*Math.pow(10,(t-.4)*1.8)}function Qo(t){return 1+260*t*t}function ti(){const t=new Array($e).fill(1);return t[M.Wall]=4,t[M.Nucleus]=2,t[M.Nucleolus]=2.5,t[M.Vacuole]=.7,t[M.Mitochondrion]=1.3,t[M.Septin]=3,t[M.BudScar]=4,{...Jo(),materialStiffness:t}}function An(t){const e=ti();e.materialStiffness=new Array($e).fill(1);for(const[n,o]of Object.entries(t.stiffness))e.materialStiffness[Number(n)]=o;return e}function ei(t,e,n,o,s=.04){const r=n.n,i=Math.abs(r[1])<.9?[0,1,0]:[1,0,0],a=oi(Tn(r,i)),c=Tn(r,a),l=[r[0]*n.d,r[1]*n.d,r[2]*n.d];let h=1/0,f=-1/0,u=1/0,m=-1/0;const{lo:d,hi:p}=t.bounds;for(let E=0;E<8;E++){const k=[E&1?p[0]:d[0],E&2?p[1]:d[1],E&4?p[2]:d[2]],b=Sn(k,a),g=Sn(k,c);h=Math.min(h,b),f=Math.max(f,b),u=Math.min(u,g),m=Math.max(m,g)}const y=Math.ceil((f-h)/s),v=Math.ceil((m-u)/s),A=new Int8Array(y*v).fill(-1);for(let E=0;E<v;E++)for(let k=0;k<y;k++){const b=h+(k+.5)*s,g=u+(E+.5)*s,P=l[0]+a[0]*b+c[0]*g,S=l[1]+a[1]*b+c[1]*g,V=l[2]+a[2]*b+c[2]*g;vt(t,P,S,V)>=0||de(t,e,P,S,V)>=0||(A[k+y*E]=me(t,P,S,V,t.wallThickness))}const w=new Uint8Array(A.length),I=new Map,z=[];for(let E=0;E<A.length;E++){const k=A[E];if(k<0||w[E])continue;let b=0;for(z.push(E),w[E]=1;z.length;){const P=z.pop();b++;const S=P%y,V=(P-S)/y;for(const[N,K]of[[1,0],[-1,0],[0,1],[0,-1]]){const G=S+N,Y=V+K;if(G<0||Y<0||G>=y||Y>=v)continue;const x=G+y*Y;!w[x]&&A[x]===k&&(w[x]=1,z.push(x))}}const g=I.get(k)??{cells:0,count:0,largest:0};g.cells+=b,b*s*s>.004&&g.count++,g.largest=Math.max(g.largest,b),I.set(k,g)}const C=s*s*o*o;return[...I.entries()].filter(([,E])=>E.count>0).map(([E,k])=>({material:E,areaUm2:k.cells*C,widthUm:2*Math.sqrt(k.largest*C/Math.PI),count:k.count})).sort((E,k)=>k.areaUm2-E.areaUm2)}function ni(t){const e=new Map;for(const n of t)for(const o of n){const s=e.get(o.material);s?(s.areaUm2+=o.areaUm2,s.count+=o.count,s.widthUm=Math.max(s.widthUm,o.widthUm)):e.set(o.material,{...o})}return[...e.values()].sort((n,o)=>o.areaUm2-n.areaUm2)}function si(t,e){return t.filter(n=>!(e>>n.material&1))}function Sn(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Tn(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function oi(t){const e=Math.hypot(t[0],t[1],t[2]);return[t[0]/e,t[1]/e,t[2]/e]}function ii(t,e,n=.9){const o=t.sim.pos,s=o.length/3;let r=[];for(let l=0;l<s;l++){const h=Math.hypot(o[3*l]-e[0],o[3*l+1]-e[1],o[3*l+2]-e[2]);h<n&&r.push({i:l,d:h})}if(r.length<6){r=[];for(let l=0;l<s;l++)r.push({i:l,d:Math.hypot(o[3*l]-e[0],o[3*l+1]-e[1],o[3*l+2]-e[2])});r.sort((l,h)=>l.d-h.d),r=r.slice(0,6),n=r[r.length-1].d*1.01}const i=Uint32Array.from(r,l=>l.i),a=Float32Array.from(r,l=>Math.max(.15,1-(l.d/n)**2)),c=new Float32Array(i.length*3);return i.forEach((l,h)=>{for(let f=0;f<3;f++)c[3*h+f]=o[3*l+f]-e[f]}),{piece:t,idx:i,weight:a,offset:c,target:[...e],rot:[1,0,0,0,1,0,0,0,1],compliance:2e-5}}function ri(t,e){const{pos:n,invMass:o}=t.piece.sim,s=t.rot,r=t.compliance/(e*e);for(let i=0;i<t.idx.length;i++){const a=t.idx[i],c=o[a];if(c===0)continue;const l=t.offset[3*i],h=t.offset[3*i+1],f=t.offset[3*i+2],u=t.target[0]+s[0]*l+s[3]*h+s[6]*f,m=t.target[1]+s[1]*l+s[4]*h+s[7]*f,d=t.target[2]+s[2]*l+s[5]*h+s[8]*f,p=c/(c+r)*t.weight[i];n[3*a]+=(u-n[3*a])*p,n[3*a+1]+=(m-n[3*a+1])*p,n[3*a+2]+=(d-n[3*a+2])*p}}function ai(t,e){const n=ii(e,t.target),o=t.rot;for(let s=0;s<n.idx.length;s++){const r=n.offset.slice(3*s,3*s+3);n.offset[3*s]=o[0]*r[0]+o[1]*r[1]+o[2]*r[2],n.offset[3*s+1]=o[3]*r[0]+o[4]*r[1]+o[5]*r[2],n.offset[3*s+2]=o[6]*r[0]+o[7]*r[1]+o[8]*r[2]}return{...n,rot:t.rot,compliance:t.compliance}}function li(t,e){const{pos:n,prevPos:o,invMass:s}=t;for(let r=0,i=s.length;r<i;r++){const a=n[3*r+1];if(a>=0||s[r]===0)continue;const c=-a;n[3*r+1]=0;const l=n[3*r]-o[3*r],h=n[3*r+2]-o[3*r+2],f=Math.hypot(l,h);if(f<e*c)n[3*r]=o[3*r],n[3*r+2]=o[3*r+2];else if(f>0){const u=Math.min(1,e*c/f);n[3*r]-=l*u,n[3*r+2]-=h*u}}}const Rn=new WeakMap;function En(t){let e=Rn.get(t);if(e)return e;const n=t.tets,o=n.length/4,s=t.restPos,r=new Map,i=(f,u)=>{const m=[];for(let d=0;d<4;d++)d!==u&&m.push(n[4*f+d]);return m.sort((d,p)=>d-p).join(",")};for(let f=0;f<o;f++)for(let u=0;u<4;u++){const m=i(f,u);r.set(m,(r.get(m)??0)+1)}const a=new Int8Array(o).fill(-1),c=new Uint8Array(t.invMass.length);for(let f=0;f<o;f++)for(let u=0;u<4;u++)if(r.get(i(f,u))===1){a[f]=u;for(let m=0;m<4;m++)m!==u&&(c[n[4*f+m]]=1)}const l=[];c.forEach((f,u)=>{f&&l.push(u)});const h=new Float32Array(t.invMass.length);for(let f=0;f<h.length;f++){if(c[f])continue;let u=1/0;for(const m of l)u=Math.min(u,(s[3*f]-s[3*m])**2+(s[3*f+1]-s[3*m+1])**2+(s[3*f+2]-s[3*m+2])**2);h[f]=-Math.sqrt(u)}return e={phi:h,surface:Uint32Array.from(l),faceOpp:a},Rn.set(t,e),e}const ci=.3,hi=.6;class fi{constructor(){this.tableSize=2048,this.start=new Int32Array(this.tableSize+1),this.items=new Int32Array(0),this.pairs=new Int32Array(0),this.inv=new Float64Array(0),this.lo=new Float64Array(3),this.hi=new Float64Array(3),this.e=new Float64Array(9)}hash(e,n,o){return(Math.imul(e,92837111)^Math.imul(n,689287499)^Math.imul(o,283923481))&this.tableSize-1}solve(e){if(e.length<2)return;const n=e.map(o=>gs(o.sim.pos));for(let o=0;o<e.length;o++){const s=[1/0,1/0,1/0,-1/0,-1/0,-1/0];for(let r=0;r<e.length;r++)if(!(r===o||!Ge(n[r],n[o])))for(let i=0;i<3;i++)s[i]=Math.min(s[i],Math.max(n[r][i],n[o][i])),s[3+i]=Math.max(s[3+i],Math.min(n[r][3+i],n[o][3+i]));if(!(s[0]>s[3])){this.index(e[o].sim,s);for(let r=0;r<e.length;r++)r!==o&&Ge(n[r],s)&&this.eject(e[r].sim,e[o].sim,s)}}}index(e,n){const o=e.pos,s=e.tets,r=s.length/4,i=e.spacing,a=1/i;this.inv.length<9*r&&(this.inv=new Float64Array(9*r));const c=this.start;c.fill(0);const l=this.lo,h=this.hi,f=this.e;let u=0;for(let m=0;m<r;m++){const d=3*s[4*m];for(let p=0;p<3;p++)l[p]=o[d+p],h[p]=o[d+p];for(let p=1;p<4;p++)for(let y=0;y<3;y++){const v=o[3*s[4*m+p]+y];v<l[y]?l[y]=v:v>h[y]&&(h[y]=v)}if(!(h[0]<n[0]||h[1]<n[1]||h[2]<n[2]||l[0]>n[3]||l[1]>n[4]||l[2]>n[5])){for(let p=0;p<3;p++){const y=3*s[4*m+1+p];for(let v=0;v<3;v++)f[3*p+v]=o[y+v]-o[d+v]}di(f,this.inv,9*m);for(let p=Math.floor(l[0]*a);p<=Math.floor(h[0]*a);p++)for(let y=Math.floor(l[1]*a);y<=Math.floor(h[1]*a);y++)for(let v=Math.floor(l[2]*a);v<=Math.floor(h[2]*a);v++){const A=this.hash(p,y,v);if(u+2>this.pairs.length){const w=new Int32Array(Math.max(1024,2*this.pairs.length));w.set(this.pairs),this.pairs=w}this.pairs[u++]=A,this.pairs[u++]=m,c[A]++}}}for(let m=1;m<=this.tableSize;m++)c[m]+=c[m-1];this.items.length<u/2&&(this.items=new Int32Array(this.pairs.length/2));for(let m=u-2;m>=0;m-=2)this.items[--c[this.pairs[m]]]=this.pairs[m+1]}eject(e,n,o){const s=e.pos,r=e.prevPos,i=n.pos,a=n.prevPos,c=n.tets,l=n.invMass,{phi:h,faceOpp:f}=En(n),u=n.spacing,m=1/u,d=ci*u,p=this.inv,y=this.start,v=this.items,A=[0,0,0,0];for(const w of En(e).surface){const I=s[3*w],z=s[3*w+1],C=s[3*w+2];if(I<o[0]||z<o[1]||C<o[2]||I>o[3]||z>o[4]||C>o[5])continue;const E=this.hash(Math.floor(I*m),Math.floor(z*m),Math.floor(C*m));let k=-1;for(let D=y[E];D<y[E+1];D++){const U=v[D],H=9*U,nt=3*c[4*U],st=I-i[nt],lt=z-i[nt+1],ft=C-i[nt+2],ct=p[H]*st+p[H+3]*lt+p[H+6]*ft,at=p[H+1]*st+p[H+4]*lt+p[H+7]*ft,dt=p[H+2]*st+p[H+5]*lt+p[H+8]*ft;if(Math.min(1-ct-at-dt,ct,at,dt)>=0){k=U,A[0]=1-ct-at-dt,A[1]=ct,A[2]=at,A[3]=dt;break}}if(k<0)continue;const b=k,g=9*b,P=[c[4*b],c[4*b+1],c[4*b+2],c[4*b+3]],S=h[P[0]],V=h[P[1]]-S,N=h[P[2]]-S,K=h[P[3]]-S;let G=p[g]*V+p[g+1]*N+p[g+2]*K,Y=p[g+3]*V+p[g+4]*N+p[g+5]*K,x=p[g+6]*V+p[g+7]*N+p[g+8]*K,R=Math.sqrt(G*G+Y*Y+x*x),T;if(R>1e-6){const D=A[0]*S+A[1]*h[P[1]]+A[2]*h[P[2]]+A[3]*h[P[3]];G/=R,Y/=R,x/=R,T=-D/R}else if(f[b]>=0){const D=f[b],U=[0,1,2,3].filter(wt=>wt!==D).map(wt=>3*P[wt]),H=i[U[1]]-i[U[0]],nt=i[U[1]+1]-i[U[0]+1],st=i[U[1]+2]-i[U[0]+2],lt=i[U[2]]-i[U[0]],ft=i[U[2]+1]-i[U[0]+1],ct=i[U[2]+2]-i[U[0]+2];if(G=nt*ct-st*ft,Y=st*lt-H*ct,x=H*ft-nt*lt,R=Math.sqrt(G*G+Y*Y+x*x),R<1e-12)continue;const at=3*P[D],yt=(i[at]-i[U[0]])*G+(i[at+1]-i[U[0]+1])*Y+(i[at+2]-i[U[0]+2])*x>0?-1/R:1/R;G*=yt,Y*=yt,x*=yt,T=(i[U[0]]-I)*G+(i[U[0]+1]-z)*Y+(i[U[0]+2]-C)*x}else continue;if(T<=0)continue;const F=e.invMass[w];let B=F;for(let D=0;D<4;D++)B+=l[P[D]]*A[D]*A[D];if(B===0)continue;const _=Math.min(T,d)/B;s[3*w]+=F*_*G,s[3*w+1]+=F*_*Y,s[3*w+2]+=F*_*x;for(let D=0;D<4;D++){const U=3*P[D],H=l[P[D]]*A[D]*_;i[U]-=H*G,i[U+1]-=H*Y,i[U+2]-=H*x}let L=s[3*w]-r[3*w],W=s[3*w+1]-r[3*w+1],O=s[3*w+2]-r[3*w+2];for(let D=0;D<4;D++){const U=3*P[D];L-=A[D]*(i[U]-a[U]),W-=A[D]*(i[U+1]-a[U+1]),O-=A[D]*(i[U+2]-a[U+2])}const X=L*G+W*Y+O*x;L-=X*G,W-=X*Y,O-=X*x;const tt=Math.sqrt(L*L+W*W+O*O);if(tt<1e-12)continue;const et=Math.min(1,hi*Math.min(T,d)/tt)/B;s[3*w]-=F*et*L,s[3*w+1]-=F*et*W,s[3*w+2]-=F*et*O;for(let D=0;D<4;D++){const U=3*P[D],H=l[P[D]]*A[D]*et;i[U]+=H*L,i[U+1]+=H*W,i[U+2]+=H*O}}}}function gs(t){const e=[1/0,1/0,1/0,-1/0,-1/0,-1/0];for(let n=0;n<t.length;n+=3)for(let o=0;o<3;o++)t[n+o]<e[o]&&(e[o]=t[n+o]),t[n+o]>e[3+o]&&(e[3+o]=t[n+o]);return e}function ui(t,e){return[t[0]-e,t[1]-e,t[2]-e,t[3]+e,t[4]+e,t[5]+e]}function Ge(t,e){return t[0]<=e[3]&&e[0]<=t[3]&&t[1]<=e[4]&&e[1]<=t[4]&&t[2]<=e[5]&&e[2]<=t[5]}function di(t,e,n){const o=t[0],s=t[1],r=t[2],i=t[3],a=t[4],c=t[5],l=t[6],h=t[7],f=t[8],u=a*f-c*h,m=c*l-i*f,d=i*h-a*l,p=o*u+s*m+r*d;if(Math.abs(p)<1e-18){e.fill(0,n,n+9);return}const y=1/p;e[n]=u*y,e[n+1]=(r*h-s*f)*y,e[n+2]=(s*c-r*a)*y,e[n+3]=m*y,e[n+4]=(o*f-r*l)*y,e[n+5]=(r*i-o*c)*y,e[n+6]=d*y,e[n+7]=(s*l-o*h)*y,e[n+8]=(o*a-s*i)*y}const mi=.012,pi=.6;class gi{constructor(e){this.radius=e,this.cellStart=new Int32Array(0),this.sorted=new Int32Array(0),this.owner=new Int32Array(0),this.local=new Int32Array(0),this.tableSize=32768}hash(e,n,o){return(Math.imul(e,92837111)^Math.imul(n,689287499)^Math.imul(o,283923481))&this.tableSize-1}solve(e,n=1/0){if(e.length<2)return;const o=this.radius,s=1/o;let r=0;for(const u of e)r+=u.sim.invMass.length;this.sorted.length<r&&(this.sorted=new Int32Array(r),this.owner=new Int32Array(r),this.local=new Int32Array(r)),this.cellStart.length!==this.tableSize+1&&(this.cellStart=new Int32Array(this.tableSize+1));const i=this.cellStart;i.fill(0);const a=new Int32Array(r),c=e.map(u=>gs(u.sim.pos)),l=c.map((u,m)=>{const d=[1/0,1/0,1/0,-1/0,-1/0,-1/0];return c.forEach((p,y)=>{if(!(y===m||!Ge(ui(u,o),p)))for(let v=0;v<3;v++)d[v]=Math.min(d[v],p[v]-o),d[3+v]=Math.max(d[3+v],p[3+v]+o)}),d});let h=0;e.forEach((u,m)=>{const d=u.sim.pos,p=l[m];if(!(p[0]>p[3]))for(let y=0;y<u.sim.invMass.length;y++){const v=d[3*y],A=d[3*y+1],w=d[3*y+2];v<p[0]||A<p[1]||w<p[2]||v>p[3]||A>p[4]||w>p[5]||(a[h]=this.hash(Math.floor(v*s),Math.floor(A*s),Math.floor(w*s)),i[a[h]]++,this.owner[h]=m,this.local[h]=y,h++)}}),r=h;for(let u=1;u<=this.tableSize;u++)i[u]+=i[u-1];for(let u=r-1;u>=0;u--)this.sorted[--i[a[u]]]=u;const f=o*o;for(let u=0;u<r;u++){const m=e[this.owner[u]].sim,d=this.local[u],p=m.pos,y=Math.floor(p[3*d]*s),v=Math.floor(p[3*d+1]*s),A=Math.floor(p[3*d+2]*s);for(let w=-1;w<=1;w++)for(let I=-1;I<=1;I++)for(let z=-1;z<=1;z++){const C=this.hash(y+w,v+I,A+z);for(let E=i[C];E<i[C+1];E++){const k=this.sorted[E];if(k<=u||this.owner[k]===this.owner[u])continue;const b=e[this.owner[u]],g=e[this.owner[k]],P=g.sim,S=this.local[k],V=P.pos,N=V[3*S]-p[3*d],K=V[3*S+1]-p[3*d+1],G=V[3*S+2]-p[3*d+2],Y=N*N+K*K+G*G;if(Y>=f||Y<1e-12)continue;let x=o;if(b.cutGroup!==void 0&&b.cutGroup===g.cutGroup&&(x=o*Math.min(1,Math.max(0,(n-(b.bornAt??0))/pi)),Y>=x*x))continue;const R=m.invMass[d],T=P.invMass[S],F=R+T;if(F===0)continue;const B=Math.sqrt(Y),_=Math.min(x-B,mi)/B/F;p[3*d]-=N*_*R,p[3*d+1]-=K*_*R,p[3*d+2]-=G*_*R,V[3*S]+=N*_*T,V[3*S+1]+=K*_*T,V[3*S+2]+=G*_*T}}}}}const bi=100,yi=1,In=new WeakMap;function vi(t){let e=In.get(t);return e||(e=wi(t),In.set(t,e)),e}function wi(t){const e=t.tets.length/4,n=new Float64Array(e*4),o=new Float64Array(9),s=new Float64Array(9);for(let r=0;r<e;r++){const i=3*t.tets[4*r];for(let c=0;c<3;c++){const l=3*t.tets[4*r+1+c];for(let h=0;h<3;h++)s[3*c+h]=t.pos[l+h]-t.pos[i+h]}for(let c=0;c<3;c++)for(let l=0;l<3;l++){let h=0;for(let f=0;f<3;f++)h+=s[3*f+l]*t.restInv[9*r+3*c+f];o[3*c+l]=h}const a=[0,0,0,1];rs(o,a,30),n.set(a,4*r)}return n}const Cn=new gi(.25),Mi=new fi;function xi(t,e,n,o={}){const s=e.substeps,r=n/s,a=Zo(e.firmness)/3,c=a*bi,l=1-Math.exp(-Qo(e.damping)*r);let h=1/0;for(const f of t)h=Math.min(h,f.sim.spacing);Cn.radius=.5*h;for(let f=0;f<s;f++){for(const u of t)ki(u.sim,e.gravity,r);o.grab&&ri(o.grab,r);for(const u of t)Si(u.sim,a,c,e.materialStiffness,r,e.volume);if(o.constrain?.(t,r),o.collide!==!1){Cn.solve(t,(o.time??1/0)+f*r);for(let u=0,m=e.solidIters??1;u<m;u++)Mi.solve(t)}for(const u of t)li(u.sim,e.friction),Pi(u.sim,r),Ai(u.sim,l)}}function ki(t,e,n){const{pos:o,prevPos:s,vel:r,invMass:i}=t;for(let a=0,c=i.length;a<c;a++){const l=3*a;s[l]=o[l],s[l+1]=o[l+1],s[l+2]=o[l+2],i[a]!==0&&(r[l+1]-=e*n,o[l]+=r[l]*n,o[l+1]+=r[l+1]*n,o[l+2]+=r[l+2]*n)}}function Pi(t,e){const{pos:n,prevPos:o,vel:s}=t,r=1/e;for(let i=0,a=n.length;i<a;i++)s[i]=(n[i]-o[i])*r}function Ai(t,e){const{pos:n,vel:o,invMass:s,edges:r}=t;for(let i=0,a=r.length;i<a;i+=2){const c=r[i],l=r[i+1],h=s[c],f=s[l],u=h+f;if(u===0)continue;const m=3*c,d=3*l;let p=n[d]-n[m],y=n[d+1]-n[m+1],v=n[d+2]-n[m+2];const A=Math.sqrt(p*p+y*y+v*v);if(A<1e-9)continue;p/=A,y/=A,v/=A;const w=(o[d]-o[m])*p+(o[d+1]-o[m+1])*y+(o[d+2]-o[m+2])*v,I=e*w/u;o[m]+=h*I*p,o[m+1]+=h*I*y,o[m+2]+=h*I*v,o[d]-=f*I*p,o[d+1]-=f*I*y,o[d+2]-=f*I*v}}function Si(t,e,n,o,s,r){const{pos:i,invMass:a,tets:c,restInv:l,restVol:h,tetMaterial:f}=t,u=vi(t),m=1/(s*s),d=new Float64Array(12),p=Math.cbrt(r);for(let y=0,v=h.length;y<v;y++){const A=3*c[4*y],w=3*c[4*y+1],I=3*c[4*y+2],z=3*c[4*y+3],C=a[A/3],E=a[w/3],k=a[I/3],b=a[z/3],g=9*y,P=o[f[y]];for(let S=0;S<3;S++){const V=i[w]-i[A],N=i[w+1]-i[A+1],K=i[w+2]-i[A+2],G=i[I]-i[A],Y=i[I+1]-i[A+1],x=i[I+2]-i[A+2],R=i[z]-i[A],T=i[z+1]-i[A+1],F=i[z+2]-i[A+2],B=V*l[g]+G*l[g+1]+R*l[g+2],_=N*l[g]+Y*l[g+1]+T*l[g+2],L=K*l[g]+x*l[g+1]+F*l[g+2],W=V*l[g+3]+G*l[g+4]+R*l[g+5],O=N*l[g+3]+Y*l[g+4]+T*l[g+5],X=K*l[g+3]+x*l[g+4]+F*l[g+5],tt=V*l[g+6]+G*l[g+7]+R*l[g+8],et=N*l[g+6]+Y*l[g+7]+T*l[g+8],D=K*l[g+6]+x*l[g+7]+F*l[g+8];let U,H,nt,st,lt,ft,ct,at,dt,yt,wt;if(S!==1)nt=O*D-X*et,st=X*tt-W*D,lt=W*et-O*tt,ft=et*L-D*_,ct=D*B-tt*L,at=tt*_-et*B,dt=_*X-L*O,yt=L*W-B*X,wt=B*O-_*W,U=B*nt+_*st+L*lt-r,H=1/(n*P*h[y]);else{const rt=4*y;let J=u[rt],Z=u[rt+1],Q=u[rt+2],it=u[rt+3],Ct=1,Ft=0,zt=0,Nt=0,Bt=1,Ot=0,Vt=0,Dt=0,Lt=1;for(let Je=0;Je<yi;Je++){Ct=1-2*(Z*Z+Q*Q),Ft=2*(J*Z+Q*it),zt=2*(J*Q-Z*it),Nt=2*(J*Z-Q*it),Bt=1-2*(J*J+Q*Q),Ot=2*(Z*Q+J*it),Vt=2*(J*Q+Z*it),Dt=2*(Z*Q-J*it),Lt=1-2*(J*J+Z*Z);let Jt=Ft*L-zt*_+(Bt*X-Ot*O)+(Dt*D-Lt*et),Zt=zt*B-Ct*L+(Ot*W-Nt*X)+(Lt*tt-Vt*D),Qt=Ct*_-Ft*B+(Nt*O-Bt*W)+(Vt*et-Dt*tt);const vs=Ct*B+Ft*_+zt*L+Nt*W+Bt*O+Ot*X+Vt*tt+Dt*et+Lt*D,be=1/(Math.abs(vs)+1e-9);Jt*=be,Zt*=be,Qt*=be;const ye=Math.sqrt(Jt*Jt+Zt*Zt+Qt*Qt);if(ye<1e-9)break;const Ze=.25*ye*ye,ve=.5*(1-Ze/6),te=1-.5*Ze,ee=Jt*ve,ne=Zt*ve,se=Qt*ve,we=te*J+ee*it+ne*Q-se*Z,Me=te*Z-ee*Q+ne*it+se*J,xe=te*Q+ee*Z-ne*J+se*it,ke=te*it-ee*J-ne*Z-se*Q,oe=1/Math.sqrt(we*we+Me*Me+xe*xe+ke*ke);J=we*oe,Z=Me*oe,Q=xe*oe,it=ke*oe}if(u[rt]=J,u[rt+1]=Z,u[rt+2]=Q,u[rt+3]=it,Ct=1-2*(Z*Z+Q*Q),Ft=2*(J*Z+Q*it),zt=2*(J*Q-Z*it),Nt=2*(J*Z-Q*it),Bt=1-2*(J*J+Q*Q),Ot=2*(Z*Q+J*it),Vt=2*(J*Q+Z*it),Dt=2*(Z*Q-J*it),Lt=1-2*(J*J+Z*Z),nt=B-p*Ct,st=_-p*Ft,lt=L-p*zt,ft=W-p*Nt,ct=O-p*Bt,at=X-p*Ot,dt=tt-p*Vt,yt=et-p*Dt,wt=D-p*Lt,U=Math.sqrt(nt*nt+st*st+lt*lt+ft*ft+ct*ct+at*at+dt*dt+yt*yt+wt*wt),U<1e-9)continue;const xt=1/U;nt*=xt,st*=xt,lt*=xt,ft*=xt,ct*=xt,at*=xt,dt*=xt,yt*=xt,wt*=xt,H=1/(2*e*P*h[y])}for(let rt=0;rt<3;rt++){const J=l[g+rt],Z=l[g+3+rt],Q=l[g+6+rt];d[3+3*rt]=nt*J+ft*Z+dt*Q,d[4+3*rt]=st*J+ct*Z+yt*Q,d[5+3*rt]=lt*J+at*Z+wt*Q}d[0]=-(d[3]+d[6]+d[9]),d[1]=-(d[4]+d[7]+d[10]),d[2]=-(d[5]+d[8]+d[11]);const Ke=C*(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])+E*(d[3]*d[3]+d[4]*d[4]+d[5]*d[5])+k*(d[6]*d[6]+d[7]*d[7]+d[8]*d[8])+b*(d[9]*d[9]+d[10]*d[10]+d[11]*d[11])+H*m;if(Ke<1e-12)continue;const mt=-U/Ke;i[A]+=C*mt*d[0],i[A+1]+=C*mt*d[1],i[A+2]+=C*mt*d[2],i[w]+=E*mt*d[3],i[w+1]+=E*mt*d[4],i[w+2]+=E*mt*d[5],i[I]+=k*mt*d[6],i[I+1]+=k*mt*d[7],i[I+2]+=k*mt*d[8],i[z]+=b*mt*d[9],i[z+1]+=b*mt*d[10],i[z+2]+=b*mt*d[11]}}}const Fn=.6;function Ti(t){const e=t.invMass.length,n=[0,0,0],o=[0,0,0];let s=0;for(let i=0;i<e;i++){const a=t.invMass[i]>0?1/t.invMass[i]:0;s+=a;for(let c=0;c<3;c++)n[c]+=a*t.pos[3*i+c],o[c]+=a*t.restPos[3*i+c]}for(let i=0;i<3;i++)n[i]/=s,o[i]/=s;const r=new Array(9).fill(0);for(let i=0;i<e;i++){const a=t.invMass[i]>0?1/t.invMass[i]:0,c=[t.pos[3*i]-n[0],t.pos[3*i+1]-n[1],t.pos[3*i+2]-n[2]],l=[t.restPos[3*i]-o[0],t.restPos[3*i+1]-o[1],t.restPos[3*i+2]-o[2]];for(let h=0;h<3;h++)for(let f=0;f<3;f++)r[3*h+f]+=a*c[f]*l[h]}return{R:rs(r,[0,0,0,1],40),c:n,C:o}}function Ri(t,e,n=1){const{R:o,c:s,C:r}=e,i=t.n,a=[o[0]*i[0]+o[1]*i[1]+o[2]*i[2],o[3]*i[0]+o[4]*i[1]+o[5]*i[2],o[6]*i[0]+o[7]*i[1]+o[8]*i[2]],c=(t.d-(i[0]*s[0]+i[1]*s[1]+i[2]*s[2]))/n+(a[0]*r[0]+a[1]*r[1]+a[2]*r[2]);return{n:a,d:c}}function Ei(t,e){let n=0,o=0;for(let s=0;s<t.restVol.length;s++){let r=0;for(let i=0;i<4;i++){const a=3*t.tets[4*s+i];r+=(e.n[0]*t.restPos[a]+e.n[1]*t.restPos[a+1]+e.n[2]*t.restPos[a+2]-e.d)/4}r<0?n+=t.restVol[s]:o+=t.restVol[s]}return[n,o]}function Ii(t,e,n=1){const o=[];for(const s of t){const r=Ri(e,Ti(s.sim),n),[i,a]=Ei(s.sim,r);i>=Fn&&a>=Fn&&o.push({parent:s,rest:r})}return o}function Ci(t,e,n,o,s){const r={n:[-o.n[0],-o.n[1],-o.n[2]],d:-o.d},i=new pe(e),a=[];for(const c of[o,r])for(const l of ds(t,[...n,c],s)){const h=fs(i,l.sim.restPos);a.push({piece:l,tetId:h.tetId,bary:h.bary})}return a}function bs(t,e){const n=e.piece.sim,o=t.tets;for(let s=0;s<n.invMass.length;s++){const r=4*e.tetId[s];for(let i=0;i<3;i++){let a=0,c=0;for(let l=0;l<4;l++){const h=e.bary[4*s+l],f=3*o[r+l]+i;a+=h*t.pos[f],c+=h*t.vel[f]}n.pos[3*s+i]=a,n.prevPos[3*s+i]=a,n.vel[3*s+i]=c}}}function zn(t,e){const n=[];for(const o of t){const s=e.splits.find(r=>r.parent===o);if(!s){n.push(o);continue}for(const r of s.children)bs(o.sim,r),n.push(r.piece)}return n}const Nn=(t,e,n,o,s)=>Ci(ms(t),e,n,o,s),Bn=.15;function Fi(t){const e=It(t.cellType,t.seed,t.from),n=It(t.cellType,t.seed,t.to),o=ps(n,[],0),s=o.sim.restPos,r=s.length/3,i=new pe(t.old),a=new Uint32Array(r),c=new Float32Array(4*r),l=(u,m,d)=>vt(e,u,m,d);let h=null;const f=new Float64Array(4);for(let u=0;u<r;u++){const m=[s[3*u],s[3*u+1],s[3*u+2]],d=l(...m)-vt(n,...m);if(Math.abs(d)>1e-6){const y=$t(l,...m);for(let v=0;v<3;v++)m[v]-=d*y[v]}let{tet:p}=i.locate(...m);p<0&&(h??=Ni(t.old),p=h[Bi(t.old.restPos,m)]),i.bary(p,m[0],m[1],m[2],f),a[u]=p,c.set(f,4*u)}return{piece:o,tetId:a,bary:c}}function zi(t,e){return bs(t.sim,e),e.piece}function Ni(t){const e=new Int32Array(t.restPos.length/3).fill(-1);for(let n=0;n<t.tets.length/4;n++)for(let o=0;o<4;o++)e[t.tets[4*n+o]]<0&&(e[t.tets[4*n+o]]=n);return e}function Bi(t,e){let n=0,o=1/0;for(let s=0;s<t.length;s+=3){const r=(t[s]-e[0])**2+(t[s+1]-e[1])**2+(t[s+2]-e[2])**2;r<o&&(o=r,n=s/3)}return n}function Oi(t,e){return as(t.pos,t.tets[4*e],t.tets[4*e+1],t.tets[4*e+2],t.tets[4*e+3])}function Vi(t){let e=0;for(let n=0;n<t.tets.length/4;n++)e+=Oi(t,n);return e}function Fe(t){let e=0;for(const n of t.restVol)e+=n;return e}const ys=2.6,On=.012,Di=.09,Vn={descend:.16,press:.3,through:.26,hold:.14,lift:.34,done:0};function Li(t,e,n,o,s){let r=0;for(const i of e){const a=i.sim.pos;for(let c=1;c<a.length;c+=3)r=Math.max(r,a[c])}return{plane:t,along:n,centre:o,length:s,parents:e,plan:null,phase:"descend",t:0,edgeY:r+3,top:r,pressDepth:Math.min(1.3,.3*r),sides:new Map}}function _i(t,e){t.t+=e,t.phase==="press"&&!t.plan&&(t.t=Math.min(t.t,Vn.press));const n=Math.min(1,t.t/Vn[t.phase]),o=n*n*(3-2*n);let s=!1;switch(t.phase){case"descend":t.edgeY=t.top+3-3*o;break;case"press":t.edgeY=t.top-t.pressDepth*n;break;case"through":t.edgeY=(t.top-t.pressDepth)*(1-n);break;case"hold":t.edgeY=0;break;case"lift":t.edgeY=(t.top+3.5)*o;break}if(n>=1&&!(t.phase==="press"&&!t.plan)){const r={descend:"press",press:"through",through:"hold",hold:"lift",lift:"done",done:"done"};t.phase=r[t.phase],t.t=0,t.phase==="through"&&(s=!!t.plan&&t.plan.splits.length>0)}return s}function Ui(t){const{n:e,d:n}=t.plane;for(const o of t.plan?.splits??[])for(const s of o.children){const r=s.piece.sim.pos;let i=0;for(let a=0;a<r.length;a+=3)i+=e[0]*r[a]+e[1]*r[a+1]+e[2]*r[a+2]-n;t.sides.set(s.piece,i>=0?1:-1)}}function Gi(t,e){const{n,d:o}=t.plane,s=t.phase==="descend"||t.phase==="press";for(const r of e){const i=r.sim,a=i.pos,c=t.sides.get(r),l=s&&t.parents.includes(r);if(!l&&c===void 0)continue;const h=.55*i.spacing;for(let f=0;f<i.invMass.length;f++){if(i.invMass[f]===0)continue;const u=a[3*f+1];if(u<t.edgeY)continue;const m=n[0]*a[3*f]+n[1]*u+n[2]*a[3*f+2]-o;if(l)Math.abs(m)<h&&(a[3*f+1]=Math.max(t.edgeY,u-On));else if(c!==void 0){const d=Di/2+.06*Math.min(1,(u-t.edgeY)/ys)+.04,p=c*m;if(p<d){const y=c*Math.min(d-p,On);a[3*f]+=n[0]*y,a[3*f+1]+=n[1]*y,a[3*f+2]+=n[2]*y}}}}}const pt={Blade:0,Wood:1,Bolster:2,Rivet:3,Bevel:4},Dn=3.5,Ln=.4,gt=.075;function er(t){if(t.phase==="done")return null;const e=t.length,n=ys,o=[],s=[],r=[],i=[],a=t.along,c=t.plane.n,l=[0,1,0],h=[t.centre[0],t.edgeY,t.centre[2]],f=x=>[0,1,2].map(R=>h[R]+a[R]*x[0]+l[R]*x[1]+c[R]*x[2]),u=x=>{const R=[0,1,2].map(F=>a[F]*x[0]+l[F]*x[1]+c[F]*x[2]),T=Math.hypot(R[0],R[1],R[2])||1;return R.map(F=>F/T)},m=(x,R,T)=>(o.push(...f(x)),s.push(...u(R)),r.push(x[0],x[1],x[2],T),o.length/3-1),d=(x,R,T)=>{const F=[R[0]-x[0],R[1]-x[1],R[2]-x[2]],B=[T[0]-x[0],T[1]-x[1],T[2]-x[2]];return[F[1]*B[2]-F[2]*B[1],F[2]*B[0]-F[0]*B[2],F[0]*B[1]-F[1]*B[0]]},p=(x,R,T,F,B,_)=>{let L=d(x,R,T);Math.hypot(L[0],L[1],L[2])<1e-9&&(L=d(x,T,F));const W=L[0]*_[0]+L[1]*_[1]+L[2]*_[2]<0;W&&(L=L.map(X=>-X));const O=[x,R,T,F].map(X=>m(X,L,B));W?i.push(O[0],O[2],O[1],O[0],O[3],O[2]):i.push(O[0],O[1],O[2],O[0],O[2],O[3])},y=-e/2,v=e/2,A=.5*n,w=v-.26*e,I=y+.5*e,z=.32,C=x=>x<=w?0:A*((x-w)/(v-w))**2,E=x=>x<=I?n:n-(n-A)*((x-I)/(v-I))**2,k=x=>gt*(1-.72*Math.max(0,(x-y)/e)),b=16,g=Array.from({length:b+1},(x,R)=>{const T=R/b;return y+e*(T<.5?T*1.2:.6+(T-.5)*.8)});for(let x=0;x<b;x++){const R=g[x],T=g[x+1],F=x===b-1;for(const B of[1,-1]){const _=O=>[O,C(O),0],L=O=>{const X=Math.min(z,.6*(E(O)-C(O)));return[O,C(O)+X,B*k(O)*.5]},W=O=>[O,E(O),B*k(O)];p(_(R),_(T),F?_(T):L(T),L(R),pt.Bevel,[0,-.2,B]),p(L(R),F?_(T):L(T),F?_(T):W(T),W(R),pt.Blade,[0,0,B])}F||p([R,E(R),k(R)],[T,E(T),k(T)],[T,E(T),-k(T)],[R,E(R),-k(R)],pt.Blade,[0,1,0])}p([y,0,0],[y,z,gt*.5],[y,n,gt],[y,n,gt],pt.Blade,[-1,0,0]),p([y,0,0],[y,z,-gt*.5],[y,n,-gt],[y,n,-gt],pt.Blade,[-1,0,0]),p([y,z,gt*.5],[y,n,gt],[y,n,-gt],[y,z,-gt*.5],pt.Blade,[-1,0,0]);const P=(x,R,T,F)=>[[T,.5*F],[.5*T,F],[-.5*T,F],[-T,.5*F],[-T,-.5*F],[-.5*T,-F],[.5*T,-F],[T,-.5*F]].map(([B,_])=>[x,R+B,_]),S=(x,R)=>{const T=x.map(F=>P(F.x,F.yc,F.h,F.w).map(B=>m(B,[0,(B[1]-F.yc)/(F.h*F.h),B[2]/(F.w*F.w)],R)));for(let F=0;F+1<T.length;F++)for(let B=0;B<8;B++){const _=T[F][B],L=T[F][(B+1)%8],W=T[F+1][(B+1)%8],O=T[F+1][B];i.push(_,O,L,L,O,W)}},V=(x,R,T)=>{const F=P(x.x,x.yc,x.h,x.w),B=m([x.x,x.yc,0],[T,0,0],R),_=F.map(L=>m(L,[T,0,0],R));for(let L=0;L<8;L++){const W=_[L],O=_[(L+1)%8];T>0?i.push(B,O,W):i.push(B,W,O)}},N=.66*n,K=y-Ln,G=[{x:y+.02,yc:N+.02*n,h:.33*n,w:gt+.03},{x:y-.5*Ln,yc:N,h:.31*n,w:.2},{x:K,yc:N,h:.3*n,w:.23}];S(G,pt.Bolster),V(G[0],pt.Bolster,1);const Y=[0,.18,.45,.75,.93,1].map(x=>({x:K-x*Dn,yc:N-.1*n*x*x,h:.3*n*(1+.14*Math.sin(Math.PI*Math.min(1,x*1.15))-(x>.93?.12:0)),w:.235*(1+.12*Math.sin(Math.PI*x))*(x>.93?.85:1)}));S(Y,pt.Wood),V(Y[Y.length-1],pt.Wood,-1);for(const x of[.2,.5,.8]){const R=K-x*Dn,T=N-.1*n*x*x,F=.235*(1+.12*Math.sin(Math.PI*x))+.004,B=.11;for(const _ of[1,-1]){const L=m([R,T,_*F],[0,0,_],pt.Rivet),W=Array.from({length:10},(O,X)=>m([R+B*Math.cos(X*Math.PI/5),T+B*Math.sin(X*Math.PI/5),_*F],[0,0,_],pt.Rivet));for(let O=0;O<10;O++){const X=W[O],tt=W[(O+1)%10];_>0?i.push(L,X,tt):i.push(L,tt,X)}}}return{pos:new Float32Array(o),normal:new Float32Array(s),rest:new Float32Array(r),idx:new Uint32Array(i)}}const At=1/60,Wi=12,qi=.25,ji=1.1,Hi=1;class nr{type;an;labels=[];params=An(he("yeast"));lastCut=null;stage=0;anatomyVersion=0;labelsVersion=0;morph=null;morphToken=0;view="anatomy";relVolume=1;reporterLevel=0;pieces=[];grab=null;knife=null;paused=!1;slow=!1;acc=0;time=0;nextId=1;template;restTotal=0;stepMs=0;constructor(e="yeast"){this.setCellType(e)}setCellType(e,n){const{firmness:o,damping:s}=this.params;this.cancelMorph(),this.type=he(e),this.stage=n??this.type.defaultStage??0,this.an=It(e,7,this.stage),this.labels=vn(e,7,this.stage),this.params={...An(this.type),firmness:o,damping:s},this.template=ps(this.an,[],0),this.lastCut=null,this.reset()}reset(){this.cancelMorph(),this.grab=null,this.knife=null,this.params.volume=this.relVolume;const e=Un(this.template,this.nextId++);Xi(e.sim,.6),this.pieces=[e],this.restTotal=Fe(e.sim),this.refreshSkins()}update(e){if(this.paused)return;this.acc+=Math.min(e,.1)*(this.slow?.25:1);let n=0;const o=performance.now();for(;this.acc>=At&&n<2;)this.acc-=At,n++,this.fixedStep();n===2&&(this.acc=Math.min(this.acc,At)),n&&(this.stepMs=(performance.now()-o)/n,this.refreshSkins()),n&&this.morph&&this.driveMorph()}condensatesShown=!1;get hiddenMaterials(){return this.condensatesShown?0:1<<M.Condensate}get restScale(){return Math.cbrt(this.params.volume)}get morphing(){return this.morph!==null}get stageTarget(){return this.morph?.target??this.stage}morphTo(e,n){const o=this.type.stages?.length??1;return e=Math.max(0,Math.min(o-1,e)),this.pieces.length!==1||this.pieces[0].planes.length||this.knife?(this.setCellType(this.type.id,e),"rebuilt"):this.morph?(this.morph.target=e,this.morph.rate=n,"morph"):e===this.stage?"none":(this.morph={target:e,rate:n,token:++this.morphToken,pending:!1,lastAt:this.time-Bn},"morph")}cancelMorph(){this.morph=null,this.morphToken++}driveMorph(){const e=this.morph;if(e.pending)return;const n=this.morphWorker(),o=this.time-e.lastAt;if(!n&&o<Bn)return;const s=e.target-this.stage,r=Math.abs(s)<=e.rate*o?e.target:this.stage+Math.sign(s)*e.rate*o,i=this.pieces[0],a={cellType:this.type.id,seed:this.an.seed,from:this.stage,to:r,old:{restPos:i.sim.restPos,tets:i.sim.tets,restInv:i.sim.restInv,spacing:i.sim.spacing}};if(e.lastAt=this.time,!n){this.swapKeyframe(i,r,Fi(a));return}e.pending=!0;const c=e.token,l=++this.requestId,h=f=>{f.data.id===l&&(n.removeEventListener("message",h),this.morph?.token===c&&(this.morph.pending=!1,this.swapKeyframe(i,r,f.data.kf)))};n.addEventListener("message",h),n.postMessage({id:l,req:a})}swapKeyframe(e,n,o){if(this.pieces.length!==1||this.pieces[0]!==e){this.cancelMorph();return}this.template=Un(o.piece,0);const s=zi(e,o);s.id=this.nextId++,this.pieces=[s],this.grab?.piece===e&&(this.grab=ai(this.grab,s));const r=Math.round(this.stage);this.stage=n,this.an=It(this.type.id,this.an.seed,n),this.anatomyVersion++,Math.round(n)!==r&&(this.labels=vn(this.type.id,this.an.seed,n),this.labelsVersion++),this.restTotal=Fe(s.sim),n===this.morph?.target&&(this.morph=null,this.an.fission&&this.divide()),this.refreshSkins()}divide(){const e=this.an.fission,n=this.pieces[0];if(!e||this.pieces.length!==1||n.planes.length||this.knife)return!1;this.cancelMorph();const o=c=>{if(!(this.pieces.length!==1||this.pieces[0]!==n||c.length<2)){for(const l of c)l.piece.id=this.nextId++,l.piece.bornAt=this.time;for(const l of c)l.piece.cutGroup=c[0].piece.id;this.pieces=zn(this.pieces,{splits:[{parent:n,children:c}]}),this.grab&&!this.pieces.includes(this.grab.piece)&&(this.grab=null),this.refreshSkins()}},s=this.worker();if(!s)return o(Nn(this.an,n.sim,n.planes,e,()=>0)),this.pieces.length>1;const r=++this.requestId,i={id:r,cellType:this.type.id,stage:this.stage,umPerUnit:this.type.umPerUnit,seed:this.an.seed,jobs:[{parentPlanes:n.planes,rest:e,parent:{restPos:n.sim.restPos,tets:n.sim.tets,restInv:n.sim.restInv,spacing:n.sim.spacing}}]},a=c=>{c.data.id===r&&(s.removeEventListener("message",a),o(c.data.results[0]))};return s.addEventListener("message",a),s.postMessage(i),!0}morphWorkerRef;morphWorker(){if(this.morphWorkerRef===void 0)try{this.morphWorkerRef=typeof Worker>"u"?null:new Worker(new URL("/turgor/assets/morphWorker-DYx9LWyw.js",import.meta.url),{type:"module"})}catch{this.morphWorkerRef=null}return this.morphWorkerRef}fixedStep(){const e=this.knife;if(e){if(_i(e,At)){const n=this.grab?.piece,o=e.plan;this.pieces=zn(this.pieces,o);for(const s of o.splits)for(const r of s.children)r.piece.cutGroup=o.splits[0].children[0].piece.id,r.piece.bornAt=this.time;n&&!this.pieces.includes(n)&&(this.grab=null),Ui(e)}e.phase==="done"&&(this.knife=null)}this.params.volume+=(this.relVolume-this.params.volume)*(1-Math.exp(-At/qi)),xi(this.pieces,this.params,At,{grab:this.grab,constrain:this.knife?n=>Gi(this.knife,n):void 0,time:this.time}),this.time+=At}refreshSkins(){for(const e of this.pieces){fe(e.skin,e.sim);for(const n of e.organelles)fe(n,e.sim);this.view==="deformation"?Ks(e,this.restScale):e.skin.scalar=void 0}}setView(e){this.view=e,this.refreshSkins()}cut(e,n,o){if(this.knife)return"busy";let s=[n[0]-e[0],0,n[2]-e[2]];const r=Math.hypot(s[0],s[2]);if(r<.2)return"miss";s=[s[0]/r,0,s[2]/r];const i=[s[2],0,-s[0]],a={n:i,d:i[0]*e[0]+i[2]*e[2]},c=s[0]*e[0]+s[2]*e[2],l=c+r,h=this.pieces.filter(v=>{const A=v.sim.pos;for(let w=0;w<A.length;w+=3){const I=i[0]*A[w]+i[2]*A[w+2]-a.d,z=s[0]*A[w]+s[2]*A[w+2];if(Math.abs(I)<v.sim.spacing&&z>c-.6&&z<l+.6)return!0}return!1});if(h.length===0)return"miss";if(this.pieces.length+h.length>Wi)return"full";const f=Ii(h,a,this.restScale);if(f.length===0)return"miss";s[0]*o[0]+s[2]*o[2]<0&&(s=[-s[0],0,-s[2]]);let u=1/0,m=-1/0;for(const{parent:v}of f){const A=v.sim.pos;for(let w=0;w<A.length;w+=3){const I=s[0]*A[w]+s[2]*A[w+2];u=Math.min(u,I),m=Math.max(m,I)}}const d=(u+m)/2,p=[i[0]*a.d+s[0]*d,0,i[2]*a.d+s[2]*d];this.cancelMorph();const y=Li(a,f.map(v=>v.parent),s,p,Math.max(8,m-u+2.5));return this.knife=y,this.buildCut(y,f),"ok"}buildCut(e,n){const o=c=>{if(this.knife===e){e.plan={world:e.plane,splits:n.map((l,h)=>({parent:l.parent,children:c[h]})).filter(l=>l.children.length>=2&&this.pieces.includes(l.parent))};for(const l of e.plan.splits)for(const h of l.children)h.piece.id=this.nextId++}},s=this.worker();if(!s){o(n.map(c=>Nn(this.an,c.parent.sim,c.parent.planes,c.rest,()=>0))),this.reportCut(ni(n.map(c=>ei(this.an,c.parent.planes,c.rest,this.type.umPerUnit))));return}const r=++this.requestId,i={id:r,cellType:this.type.id,stage:this.stage,umPerUnit:this.type.umPerUnit,seed:this.an.seed,jobs:n.map(c=>({parentPlanes:c.parent.planes,rest:c.rest,parent:{restPos:c.parent.sim.restPos,tets:c.parent.sim.tets,restInv:c.parent.sim.restInv,spacing:c.parent.sim.spacing}}))},a=c=>{c.data.id===r&&(s.removeEventListener("message",a),o(c.data.results),this.knife===e&&this.reportCut(c.data.report))};s.addEventListener("message",a),s.postMessage(i)}cutSerial=0;reportCut(e){this.lastCut={entries:si(e,this.hiddenMaterials),serial:++this.cutSerial}}anchorCache=new WeakMap;labelPositions(){const e=[];for(const n of this.pieces){let o=this.anchorCache.get(n);if(!o){o=[];const i=new pe(n.sim);for(const a of this.labels){const c=a.anchor;if(de(this.an,n.planes,c[0],c[1],c[2])>=0)continue;const{tet:l,minBary:h}=i.locate(c[0],c[1],c[2]);if(l<0||h<-.5)continue;const f=new Float64Array(4);i.bary(l,c[0],c[1],c[2],f),o.push({label:a,tet:l,bary:f})}this.anchorCache.set(n,o)}const s=n.sim.pos,r=n.sim.tets;for(const{label:i,tet:a,bary:c}of o){const l=[0,0,0];for(let h=0;h<4;h++){const f=3*r[4*a+h];l[0]+=c[h]*s[f],l[1]+=c[h]*s[f+1],l[2]+=c[h]*s[f+2]}e.push({label:i,pos:l})}}return e}cutWorker;requestId=0;worker(){if(this.cutWorker===void 0)try{this.cutWorker=typeof Worker>"u"?null:new Worker(new URL("/turgor/assets/worker-DNfbC0M-.js",import.meta.url),{type:"module"})}catch{this.cutWorker=null}return this.cutWorker}nudge(){for(const e of this.pieces){const n=e.sim,o=Yi(n.pos),s=Math.random()-.5,r=Math.random()-.5,i=7+Math.random()*5,a=34+Math.random()*14,c=[(Math.random()-.5)*16,(Math.random()-.5)*16];for(let l=0;l<n.invMass.length;l++){const h=n.pos[3*l]-o[0],f=n.pos[3*l+1]-o[1],u=n.pos[3*l+2]-o[2];n.vel[3*l]+=c[0]+i*(-r*f),n.vel[3*l+1]+=a+i*(r*h-s*u),n.vel[3*l+2]+=c[1]+i*(s*f)}}}centre(){const e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(const o of this.pieces){const s=o.sim.pos;for(let r=0;r<s.length;r+=3)for(let i=0;i<3;i++)e[i]=Math.min(e[i],s[r+i]),n[i]=Math.max(n[i],s[r+i])}return e.map((o,s)=>(o+n[s])/2)}stats(){let e=0,n=0,o=0;for(const i of this.pieces){e+=Vi(i.sim),n+=Fe(i.sim);const a=i.sim;for(let c=0;c<a.invMass.length;c++)a.invMass[c]&&(o+=.5/a.invMass[c]*(a.vel[3*c]**2+a.vel[3*c+1]**2+a.vel[3*c+2]**2))}const s=Ue**3*.0011,r=Ue*.01;return{massPg:this.restTotal*this.type.umPerUnit**3*(ji-(1-this.params.volume)*Hi),volumePct:100*e/n,kineticMicroJ:o*s*r**2*1e6,pieces:this.pieces.length}}}function Yi(t){const e=[0,0,0];for(let o=0;o<t.length;o+=3)e[0]+=t[o],e[1]+=t[o+1],e[2]+=t[o+2];const n=t.length/3;return[e[0]/n,e[1]/n,e[2]/n]}function Xi(t,e){let n=1/0;for(let o=1;o<t.pos.length;o+=3)n=Math.min(n,t.pos[o]);for(let o=1;o<t.pos.length;o+=3)t.pos[o]+=e-n,t.prevPos[o]=t.pos[o];t.vel.fill(0)}function _n(t){return{...t,pos:t.pos.slice(),normal:t.normal.slice()}}function Un(t,e){const n=t.sim;return{id:e,planes:t.planes,sim:{...n,pos:n.restPos.slice(),prevPos:n.restPos.slice(),vel:new Float32Array(n.vel.length),invMass:n.invMass.slice()},skin:_n(t.skin),organelles:t.organelles.map(_n)}}function sr(t,e,n,o,s){const r=Ms(t),i=2*e/o-1,a=1-2*n/s,c=tn(r,[i,a,0]),l=tn(r,[i,a,1]),h=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],f=Math.hypot(h[0],h[1],h[2]);return{o:c,d:[h[0]/f,h[1]/f,h[2]/f]}}function or(t,e){let n=null;for(const o of t){const{pos:s,idx:r}=o.skin;for(let i=0;i<r.length;i+=3){const a=3*r[i],c=3*r[i+1],l=3*r[i+2],h=s[c]-s[a],f=s[c+1]-s[a+1],u=s[c+2]-s[a+2],m=s[l]-s[a],d=s[l+1]-s[a+1],p=s[l+2]-s[a+2],y=e.d[1]*p-e.d[2]*d,v=e.d[2]*m-e.d[0]*p,A=e.d[0]*d-e.d[1]*m,w=h*y+f*v+u*A;if(Math.abs(w)<1e-12)continue;const I=1/w,z=e.o[0]-s[a],C=e.o[1]-s[a+1],E=e.o[2]-s[a+2],k=(z*y+C*v+E*A)*I;if(k<0||k>1)continue;const b=C*u-E*f,g=E*h-z*u,P=z*f-C*h,S=(e.d[0]*b+e.d[1]*g+e.d[2]*P)*I;if(S<0||k+S>1)continue;const V=(m*b+d*g+p*P)*I;V>0&&(!n||V<n.t)&&(n={piece:o,t:V,point:[e.o[0]+e.d[0]*V,e.o[1]+e.d[1]*V,e.o[2]+e.d[2]*V]})}}return n}function ir(t,e,n){const o=e[0]*t.d[0]+e[1]*t.d[1]+e[2]*t.d[2];if(Math.abs(o)<1e-6)return null;const s=(e[0]*(n[0]-t.o[0])+e[1]*(n[1]-t.o[1])+e[2]*(n[2]-t.o[2]))/o;return s<0?null:[t.o[0]+t.d[0]*s,t.o[1]+t.d[1]*s,t.o[2]+t.d[2]*s]}const $i={microtubule:{growUmPerMin:1.86,shrinkUmPerMin:9,dwellMin:1.5,restFraction:.15,speedup:60},transport:{umPerSec:.5,spacingUm:9,lengthUm:2,speedup:4},nucleoidWave:{periodSec:10,amplitude:.075},treadmill:{umPerSec:.03,speedup:30},pores:{radiusUm:.05,latticeUm:.225}};function Ki(){const t=$i;return`// Organelle motions and surface detail: generated from src/cells/cycle/dynamics.ts.
`+[["MT_GROW",t.microtubule.growUmPerMin/60],["MT_SHRINK",t.microtubule.shrinkUmPerMin/60],["MT_DWELL",t.microtubule.dwellMin*60],["MT_REST",t.microtubule.restFraction],["MT_SPEEDUP",t.microtubule.speedup],["TRANSPORT_SPEED",t.transport.umPerSec],["TRANSPORT_SPACING",t.transport.spacingUm],["TRANSPORT_LENGTH",t.transport.lengthUm],["TRANSPORT_SPEEDUP",t.transport.speedup],["WAVE_PERIOD",t.nucleoidWave.periodSec],["WAVE_AMPLITUDE",t.nucleoidWave.amplitude],["TREADMILL_SPEED",t.treadmill.umPerSec],["TREADMILL_SPEEDUP",t.treadmill.speedup],["PORE_RADIUS",t.pores.radiusUm],["PORE_CELL",t.pores.latticeUm]].map(([n,o])=>`const ${n} = ${o};`).join(`
`)+`
`}const Ji=`// Jelly Cells' organelle hooks for the engine's organelle shader (cell-engine render/wgsl.ts):
// the nucleoid's breathing, moving tubes, pores, cristae, grana, FtsZ clusters and the vacuole.
// Cell uniform app values: cell.k.z = µm per unit, cell.k.w = cell type, cell.m.x = microtubule reach.

fn umPerUnit() -> f32 { return cell.k.z; }
/** The cell's place in the dropdown: 0 budding yeast, 1 fission yeast, 2 E. coli, 3 red cell, 4 fibroblast, 5 microglia, 6 neuron. */
fn cellKind() -> i32 { return i32(cell.k.w + 0.5); }
fn isMat(m: f32, id: f32) -> bool { return abs(m - id) < 0.5; }

fn hash11(x: f32) -> f32 { return fract(sin(x * 127.1 + 3.7) * 43758.5453); }
fn hash31(p: vec3f) -> f32 { return fract(sin(dot(p, vec3f(127.1, 311.7, 74.7))) * 43758.5453); }
fn noise3(p: vec3f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash31(i), hash31(i + vec3f(1.0, 0.0, 0.0)), u.x), mix(hash31(i + vec3f(0.0, 1.0, 0.0)), hash31(i + vec3f(1.0, 1.0, 0.0)), u.x), u.y),
    mix(mix(hash31(i + vec3f(0.0, 0.0, 1.0)), hash31(i + vec3f(1.0, 0.0, 1.0)), u.x), mix(hash31(i + vec3f(0.0, 1.0, 1.0)), hash31(i + vec3f(1.0, 1.0, 1.0)), u.x), u.y), u.z);
}

/** The E. coli nucleoid breathes: density shifts along its length and back, 5–10 % within 5 s (real time). */
fn nucleoidSwell(rest: vec3f, time: f32) -> f32 {
  let x = rest.x * umPerUnit();
  let wave = sin(x * 5.2) * sin(6.2832 * time / WAVE_PERIOD) + 0.6 * sin(x * 9.1 + 1.7) * sin(6.2832 * time / (0.63 * WAVE_PERIOD) + 0.9);
  // its surface is lobed, not smooth: bundles of DNA show as bumps
  let lobes = noise3(rest * umPerUnit() * 7.0) - 0.5;
  return WAVE_AMPLITUDE * 0.62 * wave + 0.16 * lobes;
}

fn hookOrganelleOffset(pos: vec3f, nrm: vec3f, rest: vec4f, time: f32) -> vec3f {
  // radius of the nucleoid: 0.32 µm
  if (isMat(rest.w, 12.0)) { return normalize(nrm) * nucleoidSwell(rest.xyz, time) * 0.32 / umPerUnit(); }
  return vec3f(0.0);
}

/** Distance (µm) of a microtubule end from the middle of its bundle at cell time t (s): grow, pause at the tip, collapse. */
fn microtubuleEnd(t: f32, reach: f32) -> f32 {
  let rest = MT_REST * reach;
  let span = reach - rest;
  let grow = span / MT_GROW;
  let period = grow + MT_DWELL + span / MT_SHRINK;
  let u = t - period * floor(t / period);
  if (u < grow) { return rest + MT_GROW * u; }
  if (u < grow + MT_DWELL) { return reach; }
  return reach - MT_SHRINK * (u - grow - MT_DWELL);
}

/** Whether this stretch of a moving tube is there at the moment. */
fn hookOrganelleHidden(mat: f32, coord: f32, rest: vec3f) -> bool {
  let id = floor(coord + 1e-4);
  if (id < 127.5) { return false; }
  let um = umPerUnit();
  if (isMat(mat, 13.0)) {
    // each half of each bundle keeps its own time
    let side = sign(rest.x);
    let reach = cell.m.x * um;
    let period = (1.0 - MT_REST) * reach * (1.0 / MT_GROW + 1.0 / MT_SHRINK) + MT_DWELL;
    let t = F.params.x * MT_SPEEDUP + hash11(id * 2.0 + side) * period;
    return abs(rest.x) * um > microtubuleEnd(t, reach);
  }
  // carried organelles: short stretches travelling along the track, even tracks one way, odd the other
  let s = fract(coord) * 32.0 * um;
  let dir = 1.0 - 2.0 * (id - 2.0 * floor(id / 2.0));
  let along = (s - dir * TRANSPORT_SPEED * TRANSPORT_SPEEDUP * F.params.x) / TRANSPORT_SPACING + hash11(id);
  return fract(along) > TRANSPORT_LENGTH / TRANSPORT_SPACING;
}

/** 1 on a nuclear pore, 0 off it: a dot wherever a random point of the lattice lies within a pore radius of the envelope. */
fn poreAt(rest: vec3f) -> f32 {
  let p = rest * umPerUnit() / PORE_CELL;
  let i = floor(p);
  var d = 9.0;
  for (var x = -1; x <= 1; x++) { for (var y = -1; y <= 1; y++) { for (var z = -1; z <= 1; z++) {
    let c = i + vec3f(f32(x), f32(y), f32(z));
    let q = c + vec3f(hash31(c), hash31(c + 17.3), hash31(c + 41.9));
    d = min(d, distance(p, q));
  } } }
  return 1.0 - smoothstep(0.75, 1.0, d * PORE_CELL / PORE_RADIUS);
}

fn hookOrganelleSurface(base0: vec3f, mat: f32, coord: f32, rest: vec3f) -> vec3f {
  var base = base0;
  let um = umPerUnit();
  let kind = cellKind();
  if (isMat(mat, 2.0)) {
    // Nuclear envelope. In the yeasts the pores are large enough to see; in the animal cells what
    // shows is chromatin: dense clumps in microglia, hardly any in a neuron.
    if (um < 1.4) { base = mix(base, base * 0.45, poreAt(rest)); }
    else {
      var clumps = 0.18;
      if (kind == 5) { clumps = 0.5; }
      if (kind == 6) { clumps = 0.06; }
      base = mix(base, base * 0.5, clumps * smoothstep(0.45, 0.7, noise3(rest * 3.2)));
    }
  }
  if (isMat(mat, 5.0)) {
    // cristae: folds of the inner membrane across the tube (drawn far wider apart than they are)
    let s = fract(coord) * 32.0;
    base = mix(base, base * 0.7, smoothstep(0.5, 0.95, sin(s * 46.0)) * 0.5);
  }
  if (isMat(mat, 18.0)) {
    // grana: the stacks of thylakoids show as darker spots about half a micrometre across
    base = mix(base, base * 0.55, smoothstep(0.52, 0.7, noise3(rest * um * 2.4)));
  }
  if (isMat(mat, 12.0)) {
    // denser DNA is darker: the same wave that moves the surface
    base = base * (1.0 - 0.9 * nucleoidSwell(rest, F.params.x));
  }
  if (isMat(mat, 14.0) && kind == 2) {
    // FtsZ sits in clusters that travel around the ring
    let ang = atan2(rest.z, rest.y);
    let ringR = max(length(rest.yz) * um, 0.05);
    let turn = TREADMILL_SPEED * TREADMILL_SPEEDUP * F.params.x / ringR;
    base = base * (0.55 + 0.9 * smoothstep(0.35, 0.65, noise3(vec3f(cos(ang - turn), sin(ang - turn), 0.0) * 2.6 + 4.0)));
  }
  return base;
}

fn hookOrganelleGlow(base: vec3f, N: vec3f, V: vec3f, mat: f32) -> vec3f {
  // FM4-64 stains the vacuole membrane, not its lumen: bright only where seen edge-on
  if (abs(mat - 4.0) < 0.5) { return base * (0.12 + 1.3 * pow(1.0 - max(dot(N, V), 0.0), 3.0)); }
  return defaultGlow(base, N, V);
}

fn hookOrganelleFinish(c: vec3f, N: vec3f, V: vec3f, mat: f32, emissive: f32) -> vec3f {
  // vacuoles are fluid-filled and glassy
  if (abs(mat - 4.0) < 0.5) { return mix(c, studio(reflect(-V, N)), fresnel(dot(N, V), 0.04) * (1.0 - emissive)); }
  return c;
}

fn hookSectionOpacity(mat: f32) -> f32 {
  if (abs(mat - 4.0) < 0.5) { return 0.55; }      // vacuole sap is clear-ish
  if (abs(mat - 1.0) < 0.5) { return 0.8; }
  return 0.9;
}
`;function rr(){return{materialSlots:ts,wallMaterial:M.Wall,scarMaterial:M.BudScar,hooks:{constantsWgsl:Ki(),organelleWgsl:Ji}}}function ar(t,e){let n=0;for(const s of e.tubules)if(s.motion==="instability")for(const r of s.points)n=Math.max(n,Math.abs(r[0]));const o=De.findIndex(s=>s.id===e.cellType);t.setPrimitives(no(e),{bodyCount:e.body.length,organelleCount:e.organelles.length,wallThickness:e.wallThickness,app:[De[o].umPerUnit,o,n]})}const lr=[{id:"brightfield",name:"Brightfield",background:"#fafafa",ink:"#151412",absorb:[.2,.28,.5],scatter:"#ecdcbc",scatterDensity:.32,colors:{[M.Wall]:"#f4efe2",[M.Nucleus]:"#9d8fc4",[M.Nucleolus]:"#5d4a8e",[M.Vacuole]:"#cfe0e6",[M.Mitochondrion]:"#d9724e",[M.Septin]:"#3f9a8c",[M.BudScar]:"#b79c73",[M.Actin]:"#b8434f",[M.Adhesion]:"#4c5fa8",[M.Lysosome]:"#d9a638",[M.ER]:"#5b6fb8",[M.Nucleoid]:"#8f7fc0",[M.Spindle]:"#3d8f5a",[M.Ring]:"#c2356b",[M.Septum]:"#e9e2cf",[M.Golgi]:"#c98a2b",[M.Receptor]:"#2f8fa6",[M.Chloroplast]:"#5f9e3a",[M.Peroxisome]:"#c9892f",[M.Genome]:"#7d6fc0",[M.ViralProtein]:"#c2496b",[M.Vesicle]:"#d98f5c",[M.Condensate]:"#8a3d6b"},membrane:"#3a2f2a",membraneStrength:.35,emissive:0,refraction:.035,gloss:.7,swatch:["#f4efe2","#e5c68e"]},{id:"fluorescence",name:"Fluoro",background:"#151412",ink:"#f4f3f3",absorb:[.2,.17,.12],scatter:"#2a3440",scatterDensity:.1,colors:{[M.Wall]:"#6f86ff",[M.Nucleus]:"#4f7bff",[M.Nucleolus]:"#b9ccff",[M.Vacuole]:"#c46bff",[M.Mitochondrion]:"#57ff7c",[M.Septin]:"#35e3ff",[M.BudScar]:"#9fb4ff",[M.Actin]:"#ff4f6a",[M.Adhesion]:"#ffd24a",[M.Lysosome]:"#ff8a3d",[M.ER]:"#ffe066",[M.Nucleoid]:"#4f8dff",[M.Spindle]:"#7dff5a",[M.Ring]:"#ff4fa0",[M.Septum]:"#a9c4ff",[M.Golgi]:"#ffb347",[M.Receptor]:"#3df0d0",[M.Chloroplast]:"#ff4a3d",[M.Peroxisome]:"#ffd24a",[M.Genome]:"#4f8dff",[M.ViralProtein]:"#ff5fb0",[M.Vesicle]:"#ff9d5c",[M.Condensate]:"#f5ff7a"},membrane:"#e070ff",membraneStrength:.25,emissive:1,refraction:.03,gloss:.3,swatch:["#16181b","#57ff7c"]},{id:"electron",name:"EM",background:"#e6e5e4",ink:"#151412",absorb:[.5,.5,.48],scatter:"#8e8e89",scatterDensity:.6,colors:{[M.Wall]:"#dcdcd7",[M.Nucleus]:"#76766f",[M.Nucleolus]:"#2e2e2c",[M.Vacuole]:"#ededea",[M.Mitochondrion]:"#3c3c39",[M.Septin]:"#262624",[M.BudScar]:"#8c8c88",[M.Actin]:"#4a4a46",[M.Adhesion]:"#1e1e1c",[M.Lysosome]:"#262624",[M.ER]:"#55554f",[M.Nucleoid]:"#b9b9b3",[M.Spindle]:"#30302e",[M.Ring]:"#1c1c1b",[M.Septum]:"#cfcfca",[M.Golgi]:"#484844",[M.Receptor]:"#222220",[M.Chloroplast]:"#3a3a37",[M.Peroxisome]:"#2a2a28",[M.Genome]:"#2e2e2c",[M.ViralProtein]:"#3c3c39",[M.Vesicle]:"#55554f",[M.Condensate]:"#1a1a19"},membrane:"#121212",membraneStrength:.85,emissive:0,refraction:.02,gloss:.35,swatch:["#ecece8","#6a6a66"]}],ze=[.03,.34,.09],cr=(1<<$e)-1&-8388632;function hr(t){const e=n=>xs([ze[0]*n,ze[1]*n,ze[2]*n]);return{id:"reporter",name:"Reporter",background:"#151412",ink:"#f4f3f3",absorb:[.06,.03,.06],scatter:e(t.cytoplasm),scatterDensity:.3,colors:{[M.Nucleus]:e(t.nucleus),[M.Nucleolus]:e(t.nucleus),[M.Condensate]:e(t.condensate),[M.Vacuole]:"#050806",[M.Wall]:"#12301c",[M.BudScar]:"#12301c"},membrane:"#0a140e",membraneStrength:.2,emissive:1,refraction:.02,gloss:.15,swatch:["#151412",e(1)]}}function fr(t,e){return ks(t,ts,t.id==="brightfield"?e:void 0)}function Gn(t,e,n){const o=e-t;if(!(o>0)||n<2)return[t];const s=o/(n-1),r=10**Math.floor(Math.log10(s)),i=[1,2,5,10].map(c=>c*r).find(c=>o/c<=n-1+1e-9),a=[];for(let c=Math.ceil(t/i-1e-9);c*i<=e+1e-9*i;c++)a.push(+(c*i).toPrecision(12));return a}function Zi(t,e,n,o){const s=(e-2*o)/(t.x[1]-t.x[0]),r=(n-2*o)/(t.y[1]-t.y[0]);return(i,a)=>[o+(i-t.x[0])*s,n-o-(a-t.y[0])*r]}function We(t,e,n,o={}){const{width:s,height:r}=t.canvas,i=o.margin??4,a=Zi(n,s,r,i),c=o.gridColour??"#2a2d34";if(t.clearRect(0,0,s,r),o.grid!==!1){t.strokeStyle=c,t.lineWidth=1,t.setLineDash([]),t.beginPath();for(const l of Gn(n.y[0],n.y[1],o.yTicks??3)){const[,h]=a(n.x[0],l);t.moveTo(i,h),t.lineTo(s-i,h)}if(t.stroke(),o.format){t.fillStyle=o.ink??"#8a8d94";for(const l of Gn(n.x[0],n.x[1],o.xTicks??5)){const[h]=a(l,n.y[0]);t.fillText(o.format(l),h,r-1)}}}for(const l of o.marks??[]){t.strokeStyle=c,t.lineWidth=1,t.setLineDash([2,3]);const[h]=a(l,0);t.beginPath(),t.moveTo(h,0),t.lineTo(h,r),t.stroke()}for(const l of e)l.points.length<1||(t.save(),t.globalAlpha=l.faint?.3:1,t.strokeStyle=l.colour,t.lineWidth=l.width??2,t.setLineDash(l.dash??[]),t.beginPath(),l.points.forEach(([h,f],u)=>{const[m,d]=a(h,Math.max(n.y[0],Math.min(n.y[1],f)));u===0?t.moveTo(m,d):t.lineTo(m,d)}),t.stroke(),t.restore())}const Rt=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim();function qe(t){const e=Math.min(window.devicePixelRatio||1,2),n=Math.max(1,Math.round(t.clientWidth*e)),o=Math.max(1,Math.round(t.clientHeight*e));return(t.width!==n||t.height!==o)&&(t.width=n,t.height=o),t.getContext("2d")}function ur(t,e,n,o){const s=Rt("--ink"),r=Rt("--model"),i=Rt("--line"),a=l=>n.map(h=>({label:h.label,colour:l==="V"?s:r,faint:!h.current,points:h.samples.map(f=>[f.t,l==="rHog1"?Math.min(1.2,f.rHog1):f.V])})),c=l=>({x:[0,o],y:l});We(qe(t),a("V"),c([.3,1.1]),{gridColour:i,yTicks:3}),We(qe(e),a("rHog1"),c([0,1.2]),{gridColour:i,yTicks:3})}function dr(t,e){if(!e.series.length)return;const n={player:Rt("--ink"),model:Rt("--model"),data:Rt("--data")},o=e.series.map(a=>({label:a.label,colour:n[a.kind],points:a.points,dash:a.kind==="model"?[4,3]:void 0})),s=e.series.flatMap(a=>a.points.map(c=>c[0])),r=e.series.flatMap(a=>a.points.map(c=>c[1])),i=(Math.max(...r)-Math.min(...r))*.15||.1;We(qe(t),o,{x:[Math.min(...s),Math.max(...s)],y:[Math.min(...r)-i,Math.max(...r)+i]},{gridColour:Rt("--line"),margin:8})}export{Yn as A,M,qn as R,lr as V,nr as W,Ls as a,hr as b,rr as c,dr as d,ar as e,or as f,ii as g,tr as h,Kn as i,ir as j,cr as k,er as l,ur as m,sr as n,js as o,fr as p,Hs as q,Qi as r,on as s,Xn as t,qe as u};

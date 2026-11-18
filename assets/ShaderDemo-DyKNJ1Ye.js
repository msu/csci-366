import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as _,a as A,c as d,b as s,d as b,t as R,r as u,f}from"./runtime-core.esm-bundler-BB4ns6cL.js";const S={class:"sh"},E={key:0,class:"sh-fail"},v=`precision mediump float;
uniform float time;       // seconds
varying vec2 uv;          // this pixel, 0 to 1

// the GPU runs main once for each pixel
void main() {
  vec2 p = uv - 0.5;        // relative to the center
  float d = length(p);      // distance from the center
  // waves that move out over time
  float ring = sin(d * 40.0 - time * 3.0);
  // the output color: red, green, blue, alpha
  gl_FragColor = vec4(0.5 + 0.5 * ring,
                      uv.y,
                      1.0 - d, 1.0);
}`,F=`attribute vec2 pos;
varying vec2 uv;
void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,y={__name:"ShaderDemo",setup(w){const i=u(),c=u(!1);let r;return _(()=>{const e=i.value.getContext("webgl",{preserveDrawingBuffer:!0});if(!e){c.value=!0;return}const a=(o,p)=>{const n=e.createShader(o);return e.shaderSource(n,p),e.compileShader(n),n},t=e.createProgram();e.attachShader(t,a(e.VERTEX_SHADER,F)),e.attachShader(t,a(e.FRAGMENT_SHADER,v)),e.linkProgram(t),e.useProgram(t),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const l=e.getAttribLocation(t,"pos");e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);const h=e.getUniformLocation(t,"time"),m=o=>{e.uniform1f(h,o/1e3),e.drawArrays(e.TRIANGLE_STRIP,0,4),r=requestAnimationFrame(m)};r=requestAnimationFrame(m)}),A(()=>cancelAnimationFrame(r)),(e,a)=>(f(),d("div",S,[s("canvas",{ref_key:"canvas",ref:i,class:"sh-screen",width:"350",height:"130",role:"img","aria-label":"Moving colored rings drawn by a fragment shader"},null,512),c.value?(f(),d("div",E,"WebGL is not available in this browser")):b("v-if",!0),s("pre",{class:"sh-code"},R(v)),a[0]||(a[0]=s("div",{class:"sh-note"},"Running now, on this machine's GPU, once per pixel",-1))]))}},D=g(y,[["__scopeId","data-v-dfe7d8ab"]]);export{D as default};

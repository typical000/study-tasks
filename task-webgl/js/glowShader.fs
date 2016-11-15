uniform vec3 glowColor;
uniform float glowOpacity;
varying float intensity;

void main() {
  vec3 glow = glowColor * intensity;
  gl_FragColor = vec4( glow, glow * glowOpacity);
}
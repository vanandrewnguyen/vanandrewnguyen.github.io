export const fragmentShader = `
#include <common>
 
uniform vec3 iResolution;
uniform float iTime;

// SHADER GOES HERE

#define ZOOM 2.0

vec2 hash22(vec2 p) {
    vec3 o = fract(p.xyx * vec3(123.34, 234.34, 345.56));
    o += dot(o, o+34.45);
    return fract(vec2(o.x*o.y, o.y*o.z));
}

float voronoi(vec2 uv) {
    // Voronoi
    vec2 cellID = floor(uv);
    vec2 cellUV = fract(uv);
    float minDist = 1.0;
    
    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            // Get neighbours in 3x3 kernel
            vec2 neighbour = vec2(float(x),float(y));
            // Get animated random point and use difference to set intensity
            vec2 point = hash22(cellID + neighbour);
            point = 0.5 + 0.5 * sin(iTime * 0.5 + PI * 2.0 * point);
            vec2 diff = neighbour + point - cellUV;
            float dist = length(diff);
            minDist = min(minDist, dist);
        }
    }
    
    return minDist;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    // Set UV Coords
    vec2 uv = (fragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;   
    uv *= ZOOM;
    
    vec3 col = vec3(0.0);
    float t = iTime;

    // Set up multiple layers
    float layerNum = 4.0;
    float line;

    // Create rotation matrix
    float s = sin(t * 0.1);
    float c = cos(t * 0.1);
    mat2 rot = mat2(c, -s, s, c);
    uv *= rot;
    
    // Voronoi
    col = vec3(voronoi(uv));

    fragColor = vec4(col,1.0);
}

// SHADER ENDS HERE
 
void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
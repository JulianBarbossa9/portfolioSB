import React, { useMemo, useRef, useEffect } from "react";
import { DoubleSide } from "three";

const CustomObject = () => {
  //We want 10 triangles and we need 3 points per triangle
  const verticesCount = 10 * 3

  
  
  /**
   *
   * NOTE: By default we can only see ther frontside,
   * we need set the side property to double side DoubleSide but we don't have
   * acces to three we need import three
   */
  
  const positions = useMemo(() => {
    //We have 30 positions, but we need 3 values por vertex (x,y,z)
    const positions = new Float32Array(verticesCount * 3);
    
    //We canl fill that array with random values
    for (let i = 0; i < verticesCount * 3; i++)
    positions[i] = (Math.random() - 0.5) * 3;
    
    return positions;
  }, []);
  
  const geometryRef = useRef()

  useEffect(() => {
    // We calculate the normal of the triangles
    geometryRef.current.computeVertexNormals()
    // console.log(geometryRef.current.computeVertexNormals())
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>

      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};

export default CustomObject;

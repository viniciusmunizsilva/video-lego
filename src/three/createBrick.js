import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

/**
 * Procedural LEGO-inspired building brick for the CENA EM CENA film.
 * Units are based on a stud pitch of 1.0. The returned Group is centered
 * around the brick body; its bottom sits at y=0.
 *
 * Example:
 *   const brick = createBrick({ color: "#E72B20", studsX: 2, studsZ: 4 });
 *   scene.add(brick);
 */
export function createBrick({
  color = "#E72B20",
  studsX = 2,
  studsZ = 4,
  studPitch = 1,
  bodyHeight = 0.92,
  studHeight = 0.22,
  studRadius = 0.29,
  bevel = 0.075,
  roughness = 0.24,
  clearcoat = 0.82,
} = {}) {
  if (!Number.isInteger(studsX) || studsX < 1) {
    throw new Error("studsX must be a positive integer");
  }
  if (!Number.isInteger(studsZ) || studsZ < 1) {
    throw new Error("studsZ must be a positive integer");
  }

  const group = new THREE.Group();
  group.name = `brick-${studsX}x${studsZ}`;

  const width = studsX * studPitch;
  const depth = studsZ * studPitch;
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color,
    roughness,
    metalness: 0,
    clearcoat,
    clearcoatRoughness: 0.18,
  });

  const body = new THREE.Mesh(
    new RoundedBoxGeometry(
      width,
      bodyHeight,
      depth,
      4,
      Math.min(bevel, bodyHeight * 0.2, studPitch * 0.12)
    ),
    bodyMaterial
  );
  body.name = "brick-body";
  body.position.y = bodyHeight / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const studGeometry = new THREE.CylinderGeometry(
    studRadius,
    studRadius,
    studHeight,
    32,
    1
  );
  const studMaterial = bodyMaterial.clone();

  for (let x = 0; x < studsX; x += 1) {
    for (let z = 0; z < studsZ; z += 1) {
      const stud = new THREE.Mesh(studGeometry, studMaterial);
      stud.name = `stud-${x + 1}-${z + 1}`;
      stud.position.set(
        (x - (studsX - 1) / 2) * studPitch,
        bodyHeight + studHeight / 2 - 0.015,
        (z - (studsZ - 1) / 2) * studPitch
      );
      stud.castShadow = true;
      stud.receiveShadow = true;
      group.add(stud);
    }
  }

  group.userData.dimensions = {
    width,
    height: bodyHeight + studHeight,
    depth,
    studsX,
    studsZ,
  };

  return group;
}

export const BRICK_PALETTE = {
  red: "#E72B20",
  yellow: "#F2D44C",
  blue: "#1769C2",
  black: "#10131D",
  warmWhite: "#E8E2D9",
};

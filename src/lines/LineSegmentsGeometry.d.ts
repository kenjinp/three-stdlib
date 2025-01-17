import { EdgesGeometry, InstancedBufferGeometry, LineSegments, Matrix4, Mesh, WireframeGeometry } from 'three'

export class LineSegmentsGeometry extends InstancedBufferGeometry {
  constructor()
  readonly isLineSegmentsGeometry: true

  applyMatrix4(matrix: Matrix4): this
  computeBoundingBox(): void
  computeBoundingSphere(): void
  fromEdgesGeometry(geometry: EdgesGeometry): this
  fromLineSegments(lineSegments: LineSegments): this
  fromMesh(mesh: Mesh): this
  fromWireframeGeometry(geometry: WireframeGeometry): this
  setColors(array: number[] | Float32Array): this
  setPositions(array: number[] | Float32Array): this
}

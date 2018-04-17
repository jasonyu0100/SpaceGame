class Polygon extends PIXI.Graphics{
    constructor(points,color) {
        super()
        this.color = color
        this.points = points
        this.convexHull = this.getConvexHull(points)
        this.triangles = this.getTriangles(this.convexHull)
        // Creates Graphics
        this.beginFill(this.color)
        this.drawPolygon(this.getListPositionValues())
        this.endFill()
    }

    getListPositionValues() {
        let values = []
        for (let point of this.points) {
            values.push(point.x)
            values.push(point.y)
        }
        return values
    }

    getTriangles(convexHull) {
        return null
    }

    getConvexHull(points) {
        let currentPoint = this.findLeftMostPoint(points)
        let connections = []
        let originLine = Math.PI/2
        let count = 0
        while (true) {
            connections.push(currentPoint)
            let values = this.getNextPoint(currentPoint,points,originLine)
            currentPoint = values[0]
            let minAngle = values[1]
            originLine -= minAngle
            if (currentPoint == connections[0] || count > 5) {
                break
            } else {
                count += 1
            }
        }
        return connections
    }

    getNextPoint(currentPoint,points,originLine) {
        let minAngle = null
        let minAnglePoint = null
        for (let point of points) {
		    if (point == currentPoint) {
                continue
            }
		    let angle = this.getAngleToPoint(currentPoint,point,originLine)
		    if (minAngle == null) {
			    minAnglePoint = point
			    minAngle = angle
            } else if (angle < minAngle) {
			    minAnglePoint = point
                minAngle = angle
            }
        }
        return [minAnglePoint,minAngle]
    }

    getAngleToPoint(currentPoint,checkPoint,originLine) {
        let X = checkPoint.x - currentPoint.x
        let Y = checkPoint.y - currentPoint.y
        let angle = Math.atan2(Y,X)
        angle = (originLine - angle)
        return angle
    }

    findLeftMostPoint(points) {
        let leftMost = points[0]
        for (let point of points) {
            if (point.x < leftMost.x) leftMost = point
        }
        return leftMost
    }
}
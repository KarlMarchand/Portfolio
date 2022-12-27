import { Badge, Button, Card } from "react-bootstrap"
import { useState } from 'react'

type ProjectProps = {
    id: number
    name: string
    link: string
    description: string
    tags: string[]
    imgUrl: string
}

export function Project({ id, name, link, description, tags, imgUrl }: ProjectProps) {
    const [hovering, setHovering] = useState(false);
    const [zoomTimeoutId, setZoomTimeoutId] = useState<number | null>(null);
    
    const handleMouseEnter = () => {
        setHovering(true);
        const timeoutId = setTimeout(() => {
            setZoomTimeoutId(null);
        }, 1000);
        setZoomTimeoutId(timeoutId);
    }

    const handleMouseLeave = () => {
        setHovering(false);
        if (zoomTimeoutId) {
            clearTimeout(zoomTimeoutId);
        }
    }

    return <Card 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${"bg-secondary border-primary border-3"} ${hovering && !zoomTimeoutId ?"zoom-in" : ""}`}>
        <Card.Img className="p-1"
            variant="top"
            src={imgUrl}
            height="200px"
            alt={name}
            style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-center fs-2"> {name} </Card.Title>
            <div className="my-4 bg-">{description}</div>
            <div className="d-flex mb-3">
                {tags.map(tag => {
                    return <Badge pill bg="dark" className="mx-1 p-2" style={{cursor: 'default'}}>{tag.toUpperCase()}</Badge>
                })}
            </div>
            <Button variant="primary" href={link}>See this project</Button>
        </Card.Body>
    </Card>
}
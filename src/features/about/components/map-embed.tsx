interface MapEmbedProps {
    src: string;
    title?: string;
}

export const MapEmbed = ({src, title = "Location Map"}: MapEmbedProps) => {
    return (
        <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{border: 0, minHeight: "400px"}}
                allowFullScreen
                loading="lazy"
                title={title}
            />
        </div>
    );
}

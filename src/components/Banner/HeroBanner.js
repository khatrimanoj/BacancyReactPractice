
export default function HeroBanner(props) {
    const HeroBanner = "banner" + (props.className ? ` ${props.className}` : '');

    return (
        <>
            <div className={HeroBanner}>
                {props.children}
            </div>
        </>
    )
}
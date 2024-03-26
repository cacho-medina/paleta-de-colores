function Color({ color }) {
    return (
        <>
            <div
                style={{
                    backgroundColor: `${color.codigoHex}`,
                }}
                className="color"
            ></div>
        </>
    );
}

export default Color;

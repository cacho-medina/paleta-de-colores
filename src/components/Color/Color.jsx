function Color({ color }) {
    return (
        <>
            <div
                style={{
                    backgroundColor: `${color}`,
                }}
                className="color"
            ></div>
        </>
    );
}

export default Color;

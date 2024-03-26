const url = import.meta.env.VITE_API_COLORES;

export const getColors = async () => {
    try {
        const colores = await fetch(url);
        return colores;
    } catch (error) {
        console.error(error);
    }
};
export const getColorsByName = async (nombre) => {
    try {
        const colores = await fetch(`${url}?nombre=${nombre}`);
        return colores;
    } catch (error) {
        console.error(error);
    }
};

export const saveColor = async (color) => {
    try {
        const nuevaColor = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(color),
        });
        return nuevaColor;
    } catch (error) {
        console.error(error);
    }
};

export const editColor = async (data, id) => {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const deleteColor = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

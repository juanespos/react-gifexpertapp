

export const getGifs = async (category) => {
    //encodeURI es para quitar espacios de la URL
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=loL9LCAu3sNvg0AtKr3LkaXDZmSXonFC`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifs;
}
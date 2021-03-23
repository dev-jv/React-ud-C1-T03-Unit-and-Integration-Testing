// <> ...
// const getImagePromise = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagePromise().then( console.log );
// <> ...
export const getImage = async() => {

    try {
        const apiKey = '3mS6QgbKP3edjoePuaiWZ33dP77PhEyN';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

        return url;
    } catch (error) {
        // console.error(error);
        return 'No existe';
    }
};

getImage();

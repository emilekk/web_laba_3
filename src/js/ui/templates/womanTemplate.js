export const createWomanImgTemplate = ({src, alt}) => {
    const template = `
        <div class="woman_img">
            <img src=${src} alt=${alt} />
        </div>
    `;
    return template;
}


export const createWomanRightContainerTemplate = ({header, title, description, link: {href, linkTitle}}) =>
{
    return  `
    <div class="woman_content">
        <p class="blue">${header}</p>
        <h2>${title}</h2>
        <p>${description}</p>
        <a href=${href} class="orange">${linkTitle}</a>
    </div>
    `;

};


export const womanTemplate = ({womanImgData, womanRightContainerData}) => {
    const womanImgTemplate = createWomanImgTemplate(womanImgData);
    const womanRightContainerTemplate = createWomanRightContainerTemplate(womanRightContainerData); 
    const resultTemplate =  `
        <section class="section woman">
            <div class="img_and_content"> 
                ${womanImgTemplate} 
                ${womanRightContainerTemplate}
            </div>
        </section>
    `;
    console.log(womanImgData);
    return resultTemplate;
};


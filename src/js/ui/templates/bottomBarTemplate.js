export const createBottomBarTemplate = ({title, description, btnName}) => {
    return ` 
        <section class="section bottom_bar">
            <div class="bottom_bar_text">
                <p>${title}</p>
                <h3>${description}</h3>
            </div>
            <div>
                <button class="btn bottom_bar_btn">${btnName}</button>
            </div>
        </section>
`;
}

export const bottomBarTemplate = (bottomBarData) => {
    const bottomBarButtonTemplate = createBottomBarTemplate(bottomBarData);
    return bottomBarButtonTemplate;

};

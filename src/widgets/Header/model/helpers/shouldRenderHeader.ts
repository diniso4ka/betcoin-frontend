export const shouldRenderHeader = (pages: string[], currentPage: string) => {
    return pages.indexOf(currentPage) !== -1;
};

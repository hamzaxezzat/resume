const portfolioContainer = document.querySelector(".portfolio-container");

Portfolios.forEach((portfolio) => {
    const divPortfilio = document.createElement("div");
    const divPortfilioContent = `
  <div class="col-lg-4 col-md-6 portfolio-item ${portfolio.filterType}">
  <div class="portfolio-wrap">
    <img src="assets/img/portfolio/${portfolio.imgSrc}" class="img-fluid" alt="${portfolio.imgTitle}">
    <div class="portfolio-info">
      <h4>${portfolio.imgTitle}</h4>
      <p>${portfolio.imgP}</p>
      <div class="portfolio-links">
        <a href="assets/img/portfolio/${portfolio.imgSrc}" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
        <a href="${portfolio.portfolioLink}" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
      </div>
    </div>
  </div>
</div>
`;
    divPortfilio.innerHTML = divPortfilioContent;
    portfolioContainer.appendChild(divPortfilio);
});

import React from "react";

const Blog = () => {
  return (
    <section class="blog_news pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/star.png"
          alt="vector"
          class="position-absolute"
        />
        <img
          src="assets/images/vector2.png"
          alt="vector"
          class="position-absolute bottom-0 start-0"
        />
        <img
          src="assets/images/sun.png"
          alt="vector"
          class="position-absolute"
        />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="heading__content d-flex row-gap-7 gap-20 flex-wrap justify-content-between align-items-center mb-10 mb-lg-15 ">
            <div class="heading__part">
              <span class="heading s1-color fs-five mb-5">Blog</span>
              <h3>News & Analysis</h3>
            </div>
            <a
              href="#top"
              class="cmn-btn link fs-six-up  gap-2 gap-lg-3 align-items-center"
            >
              {" "}
              See All <i class="ti ti-arrow-right fs-four"></i>
            </a>
          </div>
        </div>
        <div class="row gy-6">
          <div class="col-md-6 col-xxl-4">
            <div class="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
              <div class="blog_news__thumbs position-relative">
                <img
                  src="assets/images/blog_news.png"
                  alt="Image"
                  class="w-100"
                />
                <a
                  href="#"
                  class="border border-color second nw1-color fs-seven rounded-3 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
                >
                  News
                </a>
              </div>
              <div class="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="blog-details.html">
                  <h5 class="mb-4 mb-lg-5">
                  Institutional Adoption and Financial Integration
                  </h5>
                </a>
                <div class="fs-seven fw_500 d-flex row-gap-0 flex-wrap gap-3 mb-4 mb-lg-5">
                  August 17,2023 <span>|</span> Written by jason Turner
                </div>
                <p>
                Major firms like BlackRock and PayPal are adopting blockchain for tokenized securities and digital cash.
                </p>
                <a
                  href="#top"
                  class="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6  mt-lg-8"
                >
                  {" "}
                  Continue Reading <i class="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
              <div class="blog_news__thumbs position-relative">
                <img
                  src="assets/images/blog_news2.png"
                  alt="Image"
                  class="w-100"
                />
                <a
                  href="#"
                  class="border border-color second nw1-color fs-seven rounded-3 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
                >
                  Features
                </a>
              </div>
              <div class="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="blog-details.html">
                  <h5 class="mb-4 mb-lg-5">
                  Political Influence on Crypto Markets
                  </h5>
                </a>
                <div class="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-4 mb-lg-5">
                  August 17,2023 <span>|</span> Written by jason Turner
                </div>
                <p>
                Donald Trump’s pro-crypto stance has boosted market sentiment, with Bitcoin reaching record highs post-election results​.
                </p>
                <a
                  href="#top"
                  class="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6  mt-lg-8"
                >
                  {" "}
                  Continue Reading <i class="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
              <div class="blog_news__thumbs position-relative">
                <img
                  src="assets/images/blog_news3.png"
                  alt="Image"
                  class="w-100"
                />
                <a
                  href="#"
                  class="border border-color second nw1-color fs-seven rounded-3 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
                >
                  News
                </a>
              </div>
              <div class="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="blog-details.html">
                  <h5 class="mb-4 mb-lg-5">
                  Blockchain for Gaming and Accessibility
                  </h5>
                </a>
                <div class="fs-seven fw_500 d-flex flex-wrap row-gap-0 gap-3 mb-4 mb-lg-5">
                  August 17,2023 <span>|</span> Written by jason Turner
                </div>
                <p>
                Projects like Notcoin aim to make blockchain more accessible by gamifying experience and fostering community engagement​.
                </p>
                <a
                  href="#top"
                  class="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6  mt-lg-8"
                >
                  {" "}
                  Continue Reading <i class="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import Head from 'next/head'

export default function Home() {
    return (
      <div>
        {/*<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

*/}
        <title>Open Water Accelerator - From Idea to MVP</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <div id="all">
          <div id="header">
            <div>
              <a href="/index.html">
                <img src="openwaterlogo.png" alt="" id="logo" />
              </a>
            </div>
            <div>
              {/* blank div */}
            </div>
            <a id="ap_button" href="https://www.f6s.com/openwateracceleratorsummer20201/apply">
              <div>
                <p>Apply</p>
              </div>
            </a>
          </div>
          {/* <div class="sideways">
			<h1>We get founders to market faster.</h1>
		</div> */}
          <div id="content" className="site-content">
            <div id="intro" className="site-hero">
              <div className="block-wrapper active">
                <div className="block-flex">
                  <div className="main-block">
                    <a href="/thesis2.html">
                      <div className="intro-block block-lab">
                        <svg viewBox="0 0 200 200">
                          <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="gradient-layer">
                            Thesis
                          </text>
                        </svg>
                        <div className="block-lead" id="about_Text">
                          Get to market faster</div>
                      </div>
                    </a>
                  </div>
                  <div className="sub-blocks">
                    <a href="/team.html" className="transition-wrapper">
                      <div className="intro-block block-colab">
                        <svg viewBox="0 0 200 200">
                          <text textAnchor="middle" x="50%" y="60%" dy=".35em" className="gradient-layer">
                            Team
                          </text>
                        </svg>
                        <div className="block-lead">
                          Helping Founders
                        </div>
                      </div>
                    </a>
                    <div className="intro-block block-fuel">
                      <a href="/faq.html">
                        <svg viewBox="0 0 200 200">
                          <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="gradient-layer">
                            FAQ
                          </text>
                        </svg>
                        <div className="block-lead">
                          About Open Water
                        </div>
                      </a>
                    </div>
                  </div> {/* subblock div */}
                  <a id="ap_button_mobile" href="https://www.f6s.com/openwateracceleratorsummer20201/apply">
                    <div>
                      <p>Apply</p>
                    </div>
                  </a>
                </div>{/* blockwrapper div */}
              </div> {/* intor div */}
            </div> {/* content div */}
          </div>
        </div>{/* #all */}
      </div>
    );
  };

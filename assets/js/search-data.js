// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-group",
          title: "Research Group",
          description: "The CoRALians",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-education-amp-outreach",
          title: "Education &amp; Outreach",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Funded projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-10th-water-prediction-innovators-summer-institute",
        
          title: "10th Water Prediction Innovators Summer Institute",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/summer-2025/2025/07/24/photo-gallery.html";
          
        },
      },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2025/03/26/plotly.html";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
          
        },
      },{id: "post-chris-mansky-defended-his-master-thesis",
        
          title: "Chris Mansky defended his master thesis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spring-2024/2024/05/02/photo-gallery.html";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/05/01/tabs.html";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/29/typograms.html";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/28/post-citation.html";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/code-diff.html";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/echarts.html";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/chartjs.html";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
          
        },
      },{id: "post-8th-water-prediction-innovators-summer-institute",
        
          title: "8th Water Prediction Innovators Summer Institute",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/summer-2023/2023/07/26/distill.html";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/audios.html";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/24/videos.html";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/tables.html";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/07/04/diagrams.html";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/10/20/math.html";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/07/15/code.html";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/05/15/images.html";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-samuel-daramola-will-join-the-coral-lab-this-fall-2022-to-pursue-a-doctoral-degree",
          title: 'Samuel Daramola will join the CoRAL Lab this Fall 2022 to pursue a...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-is-co-leading-the-agu-session-nh007-compound-consecutive-and-cascading-events-challenges-for-risk-assessment-and-management-of-multihazards-chicago-il",
          title: 'Dr. Muñoz is co-leading the AGU session NH007: Compound, Consecutive, and Cascading Events:Challenges...',
          description: "",
          section: "News",},{id: "news-samuel-daramola-has-been-awarded-the-g-v-loganathan-memorial-fellowship",
          title: 'Samuel Daramola has been awarded the G. V. Loganathan Memorial Fellowship.',
          description: "",
          section: "News",},{id: "news-samuel-daramola-has-been-selected-to-participate-in-the-next-team-science-training-sponsored-by-virginia-sea-grant-and-the-national-science-foundation",
          title: 'Samuel Daramola has been selected to participate in the next Team Science training...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-is-a-co-editor-of-the-research-topic-spatiotemporal-modeling-assessment-of-water-related-multi-hazards-in-frontiers-in-water",
          title: 'Dr. Muñoz is a co-editor of the research topic “Spatiotemporal Modeling Assessment of...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-gives-a-talk-in-the-2023-georgia-water-resources-conference-university-of-georgia-ga",
          title: 'Dr. Muñoz gives a talk in the 2023 Georgia Water Resources Conference. University...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-is-awarded-with-the-2023-faculty-mentorship-grant",
          title: 'Dr. Muñoz is awarded with the 2023 Faculty Mentorship Grant.',
          description: "",
          section: "News",},{id: "news-samuel-daramola-has-been-selected-to-participate-in-the-national-water-center-innovators-program-summer-institute-sponsored-by-cuahsi-and-noaa",
          title: 'Samuel Daramola has been selected to participate in the National Water Center Innovators...',
          description: "",
          section: "News",},{id: "news-md-shadman-sakib-will-join-the-coral-lab-this-fall-2023-to-pursue-a-doctoral-degree",
          title: 'Md. Shadman Sakib will join the CoRAL Lab this Fall 2023 to pursue...',
          description: "",
          section: "News",},{id: "news-md-shadman-sakib-has-been-awarded-the-pratt-graduate-fellowship",
          title: 'Md. Shadman Sakib has been awarded the Pratt Graduate Fellowship.',
          description: "",
          section: "News",},{id: "news-chris-mansky-joins-the-coral-lab-this-fall-2023-to-pursue-a-master-degree-in-civil-engineering",
          title: 'Chris Mansky joins the CoRAL Lab this Fall 2023 to pursue a master...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-gives-a-talk-in-the-3rd-international-workshop-on-waves-storm-surges-and-coastal-hazards-university-of-notre-dame-indiana",
          title: 'Dr. Muñoz gives a talk in the 3rd International Workshop on Waves, Storm...',
          description: "",
          section: "News",},{id: "news-samuel-daramola-will-present-his-research-at-the-ocean-sciences-meeting-2024-which-will-take-place-in-new-orleans-louisiana",
          title: 'Samuel Daramola will present his research at the Ocean Sciences Meeting 2024, which...',
          description: "",
          section: "News",},{id: "news-our-work-on-inter-model-comparison-of-delft3d-fm-and-2d-hec-ras-for-total-water-level-prediction-in-coastal-to-inland-transition-zones-is-featured-as-the-top-cited-article-in-2022-2023",
          title: 'Our work on “Inter-Model Comparison of Delft3D-FM and 2D HEC-RAS for Total Water...',
          description: "",
          section: "News",},{id: "news-chris-mansky-has-successfully-defended-his-master-thesis-a-machine-learning-based-approach-to-predicting-waterborne-disease-outbreaks-caused-by-hurricanes",
          title: 'Chris Mansky has successfully defended his master thesis “A Machine Learning-based Approach to...',
          description: "",
          section: "News",},{id: "news-our-recent-article-on-quantifying-cascading-uncertainty-in-compound-flood-modeling-with-linked-process-based-and-machine-learning-models-has-been-published-in-the-hydrology-and-earth-system-sciences-hess-journal",
          title: 'Our recent article on “Quantifying Cascading Uncertainty in Compound Flood Modeling with Linked...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-in-collaboration-with-colleagues-will-be-hosting-an-agu24-session-on-nh026-hybrid-modeling-and-digital-twin-systems-for-flood-hazard-prediction-and-risk-assessment-at-different-spatial-scales",
          title: 'The CoRAL lab, in collaboration with colleagues, will be hosting an AGU24 session...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-presented-the-work-quantifying-cascading-uncertainty-in-compound-flood-modeling-with-linked-process-based-and-machine-learning-models-in-the-2024-awra-ucowr-niwr-joint-water-resources-conference-in-st-louis",
          title: 'Dr. Muñoz presented the work “Quantifying Cascading Uncertainty in Compound Flood Modeling with...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-presented-the-work-advancing-compound-flood-modeling-with-hybrid-approaches-an-integrated-modeling-perspective-in-the-ccpo-icar-seminar-series-organized-by-old-dominion-university",
          title: 'Dr. Muñoz presented the work “Advancing Compound Flood Modeling with Hybrid Approaches: An...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-presented-the-work-predicting-the-evolution-of-extreme-water-levels-with-deep-and-transfer-learning-techniques-in-the-cmcc-foccus-international-workshop-lecce-italy",
          title: 'Dr. Muñoz presented the work “Predicting the Evolution of Extreme Water Levels with...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-attended-the-american-geophysical-union-agu-conference-for-the-first-time-we-hold-a-session-in-digital-twins-and-presented-five-research-works-involving-natural-hazards-and-ocean-sciences",
          title: 'The CoRAL lab attended the American Geophysical Union (AGU) conference for the first...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-collaborated-to-the-editorial-of-spatiotemporal-modeling-and-assessment-of-water-related-multi-hazards-thanks-to-the-authors-who-submitted-their-research-to-the-special-collection",
          title: 'Dr. Muñoz collaborated to the editorial of “Spatiotemporal modeling and assessment of water-related...',
          description: "",
          section: "News",},{id: "news-our-work-on-predicting-extreme-water-levels-associated-with-cyclones-has-been-published-in-water-resources-research-congratulations-samuel-for-your-first-phd-article",
          title: 'Our work on predicting extreme water levels associated with cyclones has been published...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-participated-in-the-egu-2025-we-collaborate-with-researchers-from-belgium-and-ecuador-to-advance-operational-hydrology-in-data-scarce-mountainous-areas-using-machine-learning-see-the-abstracts-1-and-2",
          title: 'Dr. Muñoz participated in the EGU 2025. We collaborate with researchers from Belgium...',
          description: "",
          section: "News",},{id: "news-md-shadman-sakib-has-been-selected-to-participate-in-the-national-water-center-innovators-program-summer-institute-sponsored-by-cuahsi-and-ciroh",
          title: 'Md. Shadman Sakib has been selected to participate in the National Water Center...',
          description: "",
          section: "News",},{id: "news-our-research-on-predicting-extreme-water-levels-in-the-u-s-atlantic-coast-has-been-featured-by-fox-weather",
          title: 'Our research on predicting extreme water levels in the U.S. Atlantic Coast has...',
          description: "",
          section: "News",},{id: "news-our-research-on-predicting-extreme-water-levels-in-the-u-s-atlantic-coast-has-been-featured-by-cnn",
          title: 'Our research on predicting extreme water levels in the U.S. Atlantic Coast has...',
          description: "",
          section: "News",},{id: "projects-cas-climate",
          title: 'CAS-Climate',
          description: "Collaborative Research. Nonstationarity of Compound Coastal Floods in the Anthropocene National Science Foundation. Division of Earth Sciences. Hydrologic Sciences Program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-vasg",
          title: 'VASG',
          description: "Flood Impacts to Rural Coastal Communities in Virginia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

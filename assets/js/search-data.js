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
      },{id: "post-chris-mansky-defended-his-master-thesis",
        
          title: "Chris Mansky defended his master thesis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spring-2024/2024/05/02/photo-gallery.html";
          
        },
      },{id: "post-8th-water-prediction-innovators-summer-institute",
        
          title: "8th Water Prediction Innovators Summer Institute",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/summer-2023/2023/07/26/distill.html";
          
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
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%69%64%6D%75%6E%6F%7A%70%61%75%74%61@%76%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/davidmunozpauta", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6032-1082", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/David-Munoz-31?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bS44baIAAAAJ&hl=en", "_blank");
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

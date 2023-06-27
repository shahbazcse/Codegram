import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

import eren from "../../assets/avatars/eren.jpeg";
import mikasa from "../../assets/avatars/mikasa.jpeg";
import peter from "../../assets/avatars/peter.jpg";
import shahbaz from "../../assets/avatars/shahbaz.jpg";
import bruce from "../../assets/avatars/bruce.jpg";
import tony from "../../assets/avatars/tony.jpg";
import steve from "../../assets/avatars/steve.jpg";
import mary from "../../assets/avatars/mary.jpg";
import gwen from "../../assets/avatars/gwen.jpg";
import woman2 from "../../assets/avatars/woman2.png";

export const dummyFollowers = [
  {
    _id: uuid(),
    firstName: "Eren",
    lastName: "Jaeger",
    username: "eren",
    password: "eren123",
    avatar: eren,
    about: "",
    portfolioURL: "",
    isVerified: false,
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mikasa",
    lastName: "Ackerman",
    username: "mikasa",
    password: "mikasa123",
    avatar: mikasa,
    about: "",
    portfolioURL: "",
    isVerified: true,
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Syeda",
    lastName: "Fatima",
    username: "fatima",
    password: "fatima123",
    avatar: woman2,
    about: "",
    portfolioURL: "",
    isVerified: true,
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Peter",
    lastName: "Parker",
    username: "peter",
    password: "peter123",
    avatar: peter,
    about: "",
    portfolioURL: "",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "tony",
    password: "tony123",
    avatar: tony,
    about: "",
    portfolioURL: "",
    isVerified: true,
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

export const dummyDP = {
  shahbaz: shahbaz,
  bruce: bruce,
  eren: eren,
  mikasa: mikasa,
  syeda: woman2,
  peter: peter,
  tony: tony,
  steve: steve,
  mary: mary,
  gwen: gwen,
};

export const dummyPosts = {
  shahbaz: [
    "Coding is my superpower. With lines of code, I bring ideas to life and shape the digital world. 💻✨ #ProgrammerLife #CodingSuperpower #DigitalCreator",

    "Debugging: Finding needles in a haystack and triumphing over bugs. The thrill of solving puzzles keeps me going! 🐛🔎 #DebuggingAdventures #ProblemSolver #CodingPuzzles",

    "In a world of algorithms and data, I am the conductor of technology. Crafting elegant solutions and optimizing efficiency. 🚀⚙️ #TechConductor #EfficiencyOptimization #AlgorithmWizard",

    "When the code compiles without errors, it feels like a victory parade. Celebrating small wins and continuous improvement. 🎉💪 #CodeCompilationJoy #SmallWinsMatter #AlwaysLearning",

    "Programmers never say 'impossible'; we say 'challenge accepted.' Embracing complexity and pushing boundaries to achieve the extraordinary. 🌟🔥 #ChallengeAccepted #PushingBoundaries #CodingMastery",

    "In the realm of coding, creativity knows no bounds. Combining logic and imagination to craft digital masterpieces. 🎨💡 #CreativeCoding #LogicAndImagination #DigitalArtistry",

    "Code is a universal language, connecting people across borders and cultures. Collaborating, sharing knowledge, and building together. 🌍🤝 #CodingCommunity #GlobalCollaboration #KnowledgeSharing",

    "Late-night coding sessions and gallons of caffeine. Fueling innovation and making ideas come alive when the world sleeps. ☕️🌙 #LateNightCoder #InnovationIgnited #CodingEnergy",

    "Errors are stepping stones to success. Embracing failure, learning from it, and growing stronger with each line of code. 💡💻 #EmbracingFailure #LearningAndGrowing #CodeResilience",

    "Beyond the code, there's a passion that drives me. The thrill of creating something impactful and leaving a mark on the digital landscape. 🔥✨ #PassionDriven #ImpactfulCoding #DigitalTrailblazer",

    "Building responsive and interactive web applications with React.js. Join me on this journey of front-end magic! ✨💻 #ReactJSDeveloper #WebApplications #FrontEndMagic",

    "In a world of components and states, I am the architect of user interfaces. Crafting seamless experiences that delight users. 🌟🎨 #UIArchitect #SeamlessExperiences #ReactJSMagic",

    "React.js is my toolkit, and JavaScript is my language. Together, they empower me to create dynamic and scalable web solutions. 💪🔧 #ReactJSToolkit #JavaScriptWizard #WebDevelopment",

    "Every bug fixed, every feature implemented is a step closer to perfection. Striving for excellence in every line of code. 🐞💡 #BugHunter #FeatureImplementation #CodePerfection",

    "React.js has taught me the power of reusability. Building reusable components that save time, improve efficiency, and foster a modular approach. ♻️🔨 #ReusableComponents #ModularApproach #ReactJSAdvantages",

    "Mastering the art of state management with React.js. Leveraging hooks and context to create robust and scalable applications. ⚡️💼 #StateManagement #ReactHooks #ScalableApps",

    "The React.js community is a wellspring of knowledge and support. Collaborating, sharing ideas, and learning from fellow developers worldwide. 🌐🤝 #ReactJSCommunity #Collaboration #ContinuousLearning",

    "Testing is not an afterthought but an integral part of the development process. Writing clean and efficient unit tests to ensure stability and reliability. ✅🧪 #TestDrivenDevelopment #UnitTesting #StabilityMatters",

    "Front-end performance optimization is my secret weapon. Minifying, lazy loading, and caching to ensure lightning-fast web experiences. ⚡️🚀 #PerformanceOptimization #LightningFastWeb #ReactJSMagic",

    "Creating seamless transitions and animations with React.js. Adding that extra touch of polish and delight to user interactions. 🎥🌈 #TransitionsAndAnimations #UserDelight #ReactJSMagic",

    "In a world of browsers and scripts, I weave magic with JavaScript. Embracing the power of the language to create dynamic web experiences. ✨💻 #JavaScriptDeveloper #WebWizard #DynamicWeb",

    "Coding is my passion, JavaScript is my language. Together, we build the foundation of the modern web. Let's create something extraordinary! 🌟🔧 #PassionateCoder #JavaScriptJourney #WebDevelopment",

    "From DOM manipulation to asynchronous programming, JavaScript empowers me to bring ideas to life. Embracing the versatility of the language. 💡🚀 #VersatileJavaScript #IdeaExecution #CodeWizard",

    "Debugging is my superpower. Solving puzzles, fixing bugs, and making the code shine. Celebrating the triumphs of squashed bugs! 🐞✅ #BugSquasher #CodeFixer #JavaScriptDebugging",

    "JavaScript frameworks are my toolkit, adding superpowers to my coding arsenal. React, Vue, Angular – exploring the possibilities and building amazing apps. ⚡️🧰 #JavaScriptFrameworks #AppBuilding #CodingSuperpowers",

    "From callbacks to promises and async/await, JavaScript evolves, and so do I. Keeping up with the latest features and best practices to write cleaner and more efficient code. 📚💻 #JavaScriptEvolution #CleanCode #EfficiencyMatters",

    "The JavaScript community is a treasure trove of knowledge and collaboration. Learning, sharing, and growing together. Join me on this exciting journey! 🌐🤝 #JavaScriptCommunity #KnowledgeSharing #Collaboration",

    "Writing elegant and maintainable code is an art. Leveraging JavaScript's expressive syntax and design patterns to create beautiful solutions. 🎨✨ #ElegantCode #JavaScriptArtistry #BeautifulSolutions",
  ],
  bruce: [
    "As Gotham's billionaire playboy by day and vigilante by night, I'm constantly reminded of the responsibility that comes with great power. #BruceWayne #GothamCity #SuperheroLife",

    "Just finished another late-night board meeting. Keeping Wayne Enterprises at the forefront of innovation and technology is my top priority. #Businessman #Entrepreneur #WayneEnterprises",

    "Training never stops. The night is my ally, and I must remain prepared. #VigilanteLife #NightWatchman #GothamProtector",

    "Throwback to my childhood. Every great hero has an origin story. Mine was shaped by tragedy, but it also gave me the strength to fight for justice. #DarkKnight #Batman #ChildhoodMemories",

    "Visited Arkham Asylum today to check on the progress of mental health initiatives. It's important to remember that not all villains are born evil; some are victims too. #Advocate #MentalHealthMatters #ChangingLives",

    "Enjoying a rare moment of downtime in the Batcave, surrounded by my trusted gadgets. Being a hero means sacrifice, but it's all worth it when Gotham City is safe. #BatcaveChronicles #SuperheroLife #GothamSavior",

    "Today, I had the pleasure of speaking at Wayne Foundation's charity gala. Giving back to the community is an essential part of the Wayne legacy. Together, we can make a difference. #Philanthropy #GivingBack #CommunityFirst",

    "The Bat-Signal shines bright in the Gotham sky tonight. Justice never sleeps, and neither do I. #NoRestForTheWicked #GothamGuardian #DarkKnightRises",

    "A new day dawns in Gotham, bringing both hope and challenges. The fight against crime is a constant battle, but I will never give up. #NeverEndingStruggle #GothamHero #ProtectorOfTheInnocent",

    "Behind the mask, I'm just a man with a mission. My journey as Batman has taught me the power of perseverance and the importance of standing up for what's right. #UnmaskingTheHero #BruceWayne #Batman",
  ],
  eren: [
    "Freedom comes at a steep price. The world beyond the walls is both terrifying and exhilarating. I will fight until my last breath to protect those I hold dear. #ErenJaeger #AttackonTitan #FreedomFighter",

    "Remembering the fallen, the sacrifices made in the name of our future. Their memories fuel my determination to eradicate the Titans and secure a world where humanity can thrive. #NeverForget #EternalResolve #AttackonTitan",

    "Every step I take brings me closer to the truth. The mysteries of the Titans must be unraveled, and I will stop at nothing to uncover the secrets that lie beyond the walls. #SeekingTruth #TitanInvestigation #CuriosityUnleashed",

    "To all my comrades, we have faced unimaginable hardships together. Our bond is unbreakable, and our resolve is unwavering. We will overcome any obstacle that stands in our way. #ComradesInArms #Unity #FightAsOne",

    "The power of the Titans courses through my veins, and with it comes great responsibility. I will not let this power consume me. Instead, I will harness it to protect the ones I love. #PowerWithin #Control #Guardian",

    "The world may label us as monsters, but we are more than that. We are survivors, fighting for a future where we are not trapped within walls. We will break free and rewrite our destiny. #BeyondTheWalls #ReclaimingFreedom #UnleashTheBeast",

    "Training never stops. Every day brings new challenges and threats. I must remain vigilant, pushing my limits to become a formidable force against the Titans. #ConstantGrowth #StrengthUnleashed #TitanSlayer",

    "In the face of despair, hope emerges. I have witnessed the darkest corners of humanity, but I still believe in the goodness that resides within. Together, we can build a world worth fighting for. #HopePrevails #LightInTheDarkness #FightForTomorrow",

    "Looking back at how far we've come, it's a reminder that change is possible. The world is shifting, and we must adapt. Our fight against the Titans is not just about survival, but about reshaping our destiny. #Evolution #TransformingWorld #EmbraceChange",

    "Courage is not the absence of fear, but the will to face it head-on. Titans may tower above us, but they cannot crush our spirit. We will rise, we will fight, and we will claim victory. #CourageousHeart #IndomitableSpirit #TitanConqueror",
  ],
  mikasa: [
    "Protecting those dear to me is my duty and my strength. I will wield my blade with unwavering determination to keep them safe. #MikasaAckerman #AttackonTitan #DevotedProtector",

    "In a world plagued by Titans, strength is essential. Through rigorous training and unwavering resolve, I strive to become a force to be reckoned with. #TrainingHard #TitanSlayer #UnyieldingResolve",

    "Cherishing the memories of those who have been lost fuels my determination. I will honor their sacrifice by continuing to fight for a world free from the Titans' grasp. #RememberingTheFallen #NeverForgotten #LegacyOfHeroes",

    "The bond of family is unbreakable. Eren is not just my adoptive brother, but a source of inspiration and strength. Together, we face the Titans, united by love and a shared purpose. #FamilyForever #SiblingsInArms #UnbreakableBond",

    "Sometimes, silence speaks louder than words. In the midst of chaos and battles, I find solace in the quiet moments, reflecting on the path we have chosen and the sacrifices we have made. #Reflections #InnerStrength #WarriorWithin",

    "My blades dance through the air, swift and lethal. With each strike, I move closer to the truth, unraveling the mysteries of the Titans. The pursuit of knowledge is my relentless quest. #SeekingAnswers #TitanInvestigation #UnveilingTruths",

    "Life is a battlefield, and I refuse to be a bystander. With my ODM gear strapped on, I soar through the sky, embracing the freedom of flight and fighting for a world without fear. #SkywardBound #WingsOfFreedom #TitanHunter",

    "The world may be cruel and unforgiving, but kindness can still shine through. In the face of adversity, I strive to show compassion, for it is the warmth in our hearts that truly sets us apart. #KindnessMatters #HeartOfGold #GentleWarrior",

    "The path of a soldier is paved with challenges, sacrifice, and loss. Yet, I will not falter. I draw strength from my comrades, the Survey Corps, and their unwavering determination to protect humanity. #SoldierLife #UnitedWeStand #CourageousFew",

    "There is beauty in the resilience of the human spirit. We rise above the Titans, pushing boundaries and defying our limitations. Together, we will reclaim our freedom and forge a future worth fighting for. #ResilientSpirit #HumanityUnited #VictoryAhead",
  ],
  syeda: [
    "Dream big, study hard, and make your mark in the world! 💪📚 #GirlPower #StudentLife #FutureLeader",

    "Embrace the power of education and let it be your wings to soar to new heights! 🎓✨ #EducationMatters #AcademicJourney #DreamBig",

    "Books, notebooks, and endless possibilities! 📚✏️ Let's conquer the world one lesson at a time! #KnowledgeIsPower #StudentLife #LearningEveryDay",

    "Success begins with a curious mind and a passion for learning. Stay curious, stay hungry, and watch the magic happen! ✨🌟 #CuriosityIsKey #LearningIsFun #GrowthMindset",

    "In the pursuit of knowledge, we uncover our true potential. Believe in yourself, work hard, and watch your dreams become reality! 💫🌟 #BelieveInYourself #HardWorkPaysOff #ChasingDreams",

    "Study sessions can be tough, but remember, you are capable of more than you know! Keep pushing, stay focused, and celebrate every milestone! 🎉💪 #StudyHard #YouGotThis #CelebratingProgress",

    "Education is the key to unlocking a world of opportunities. Let's break barriers, defy stereotypes, and show the world what a girl student can achieve! 🌍🌈 #BreakingBarriers #GirlPower #LimitlessPotential",

    "Learning is not just about grades; it's about expanding our horizons and discovering our passions. Explore, question, and let curiosity be your guide! 🌺🔍 #ExploringPassions #CuriousMinds #LifelongLearner",

    "Surround yourself with positivity and supportive friends who uplift and inspire you on your academic journey. Together, we can achieve greatness! 🤗❤️ #SupportiveFriends #TeamworkMakesTheDreamWork #MotivationMonday",

    "Education is a gift that no one can take away from you. Let's embrace it, treasure it, and use it to create a brighter future for ourselves and the world! 🌟📚 #EducationForAll #EmpoweredGirls #CreatingChange",
  ],
  peter: [
    "Just your friendly neighborhood Spider-Man, swinging into action to protect the city from evil. 🕷️🕸️ #SpiderMan #FriendlyNeighborhoodHero #WithGreatPower",

    "Behind the mask, I'm just a young guy trying to balance school, work, and saving the world. #PeterParker #EverydayHero #SuperheroStruggles",

    "Web-slinging through the concrete jungle. There's no better feeling than the wind in my hair and the thrill of being a superhero! 🕷️✨ #WebSlinger #AdrenalineRush #SpiderSense",

    "Being a hero isn't just about the powers; it's about the responsibility that comes with them. I'm here to make a difference, one web at a time. #Responsibility #HeroicJourney #PowerResponsibly",

    "Homework, crime-fighting, repeat. It's a never-ending cycle, but I wouldn't have it any other way. #StudentLife #SuperheroDuties #SpiderSenseMultitasking",

    "Every hero needs a sidekick, and for me, it's my trusty Spidey-sense. It guides me through the toughest battles and keeps me one step ahead of the bad guys. #SpideySense #TrustedCompanion #SuperheroSecrets",

    "Patrolling the streets of New York City, protecting the innocent, and ensuring everyone can live without fear. That's what being Spider-Man is all about. #NewYorkCityHero #CrimeFighter #WebOfJustice",

    "There's always a light at the end of the tunnel, even in the darkest of times. Stay strong, believe in yourself, and never give up. #NeverLoseHope #UnbreakableSpirit #SpiderManMotivation",

    "Discovering my powers was a life-changing moment. With great power comes great responsibility, and I'm dedicated to using it to help those in need. #SuperheroLife #PowerfulPurpose #FriendlyNeighborhoodDuty",

    "Sometimes, the hardest battles are the ones we fight within ourselves. But I've learned that embracing who I am, flaws and all, makes me a stronger hero. #SelfAcceptance #InnerStrength #SuperheroConfessions",
  ],
  tony: [
    "Genius, billionaire, philanthropist, and occasional superhero. Saving the world one invention at a time. #TonyStark #IronMan #SuperheroLife",

    "Innovation knows no bounds. Pushing the limits of technology to build a better future for all. #StarkIndustries #CuttingEdge #TechRevolution",

    "Sometimes, you have to run before you can walk. Embracing challenges head-on and never backing down. #IronMan #SuitUp #NoFear",

    "Behind the suit is a man who's seen both triumph and tragedy. Each setback only fuels the fire within to make a difference. #Resilience #TriumphOverAdversity #ArcReactorHeart",

    "With great power comes great responsibility. Using my resources to protect the innocent and fight for justice. #SuperheroPhilanthropist #IronWill #ProtectAndServe",

    "Building the future and leaving a legacy. Investing in technology that transforms lives and creates endless possibilities. #TechnologicalAdvancements #LegacyBuilder #StarkVision",

    "Life is too short for regrets. Living each moment to the fullest and seizing every opportunity that comes my way. #LiveBoldly #NoRegrets #TonyStarkLifestyle",

    "In the face of danger, humor is my armor. Using wit to lighten the mood and keep spirits high. #SarcasticHero #IronJokes #KeepingItLight",

    "Superheroes are not born; they are made. Dedication, training, and a few upgrades along the way. #IronWill #TrainingLikeAHero #Superhuman",

    "Taking a break from saving the world to appreciate the finer things in life. Good food, good company, and good times. #TonyStarkLife #LiveLuxuriously #IndulgeYourself",
  ],
  steve: [
    "A man out of time, but a hero for all generations. Captain America reporting for duty! 🇺🇸⭐️ #CaptainAmerica #HeroicLegacy #AvengersAssemble",

    "In a world full of chaos, I fight for what's right. Together, we can make a difference and build a better future. #SteveRogers #SuperSoldier #DefenderOfJustice",

    "Never underestimate the power of kindness and compassion. They are weapons that can change the world. #KindnessMatters #CompassionateHero #HeartOfCaptainAmerica",

    "Standing up for what you believe in isn't always easy, but it's the only way to create lasting change. #CourageousBeliever #StandForJustice #NeverBackDown",

    "Every hero needs a team. I'm grateful for my fellow Avengers, the true embodiment of strength, loyalty, and unity. #AvengersFamily #TeamworkMakesTheDreamWork #SuperheroSquad",

    "No matter how tough the battle, I never lose sight of the people I fight for. They inspire me to be a better hero every day. #InspiredByOthers #HeroForThePeople #NeverGiveUp",

    "Honoring the sacrifices of those who came before us. Their courage and determination laid the foundation for a better world. #RememberingHeroes #LegacyOfBravery #HeroicAncestors",

    "Sometimes, the shield is not just a weapon, but a symbol of hope. It represents the resilience and unwavering spirit of humanity. #ShieldOfHope #SymbolOfStrength #InspiringIcon",

    "Through struggles and challenges, I've learned that true strength comes from within. It's about integrity, compassion, and staying true to your values. #InnerStrength #TrueHeroism #CharacterMatters",

    "Taking a moment to appreciate the simple joys in life: a good cup of coffee, a beautiful sunrise, and the love and support of friends. #SimplePleasures #GratefulHeart #CaptainAmericaLifestyle",
  ],
  mary: [
    "Living life with passion, capturing moments through my lens. Join me on this incredible journey. 📸❤️ #MaryJane #PhotographyLife #LivingPassionately",

    "Behind every great shot is a story waiting to be told. Let's embark on this visual adventure together! 🌟✨ #Storyteller #VisualAdventurer #CapturingMemories",

    "Exploring the world one click at a time. Every photograph is a window to a new perspective. 🌍📷 #WorldExplorer #PhotographyPassion #NewPerspectives",

    "Finding beauty in the ordinary and capturing it with my camera. Life is a canvas, and I'm here to paint it with light and love. 🌸✨ #FindingBeauty #LightAndLove #CapturingMoments",

    "Through the lens, I freeze time and preserve emotions. Moments may pass, but memories last forever. 💫📸 #MemoriesForever #EmotionalCapture #TimelessMoments",

    "Photography is my language. It allows me to express myself, tell stories, and share my perspective with the world. 📷❤️ #PhotographyAsExpression #VisualStorytelling #SharingPerspective",

    "Every photograph tells a unique story. Let's unravel those tales together and discover the magic in every frame. 📚✨ #UnravelingStories #PhotographicMagic #TaleBehindTheLens",

    "Photography is not just about the destination; it's about the journey. Join me as we explore the beauty around us, one step at a time. 🚶‍♀️📸 #JourneyOfDiscovery #ExploringBeauty #StepByStep",

    "Life is a collage of moments, and photography is my way of piecing them together. Let's create a vibrant mosaic of memories. 🌈📷 #MosaicOfMemories #CreatingCollage #VibrantMoments",

    "Behind every photograph is a world waiting to be discovered. Join me as we unveil the hidden stories and beauty that surround us. 🌎✨ #UnveilingBeauty #DiscoveringWorlds #PhotographicAdventure",
  ],
  gwen: [
    "Living life with a dash of adventure and a touch of creativity. Join me as we embrace the extraordinary! ✨🎨 #GwenStacy #CreativeSoul #EmbracingAdventure",

    "Every day is a new canvas waiting to be painted. Let's color our lives with passion, resilience, and a hint of rebelliousness. 🎨❤️ #ColorfulLife #PassionAndResilience #RebelSpirit",

    "Music is the beat that fuels my soul. Let's dance to our own rhythm and create melodies that resonate with our hearts. 🎶💃 #MusicIsLife #HeartBeatsInTune #DancingToMyOwnMelody",

    "In a world of possibilities, imagination knows no limits. Let's unleash our creativity and let our dreams take flight. ✨🌙 #UnleashYourImagination #DreamsTakeFlight #InfinitePossibilities",

    "Inspiration can be found in the simplest of moments. Let's pause, observe, and let the beauty of the world ignite our inner spark. 🌟✨ #FindingInspiration #IgnitingTheSpark #EmbracingBeauty",

    "Embrace your uniqueness, your quirks, and the things that make you different. That's what makes you extraordinary. #EmbraceYourUniqueness #EmbraceYourself #BeExtraordinary",

    "Life is a beautiful dance of highs and lows. Let's find strength in our vulnerabilities and resilience in our setbacks. #StrengthInVulnerability #ResilienceUnleashed #DancingThroughLife",

    "The written word has the power to transport us to different worlds. Let's dive into the magic of storytelling and let our imaginations soar. 📚✨ #StorytellingMagic #ImaginationUnleashed #DiveIntoBooks",

    "Exploring the world with wide-eyed wonder and an open heart. Let's discover new places, new cultures, and new perspectives together. 🌍❤️ #ExploringTheWorld #CuriousWanderer #OpenHearted",

    "In a world that tries to silence us, let's use our voices to make a difference. Stand up for what you believe in and let your words be heard. 🗣️✊ #RaiseYourVoice #MakeADifference #BeHeard",
  ],
};

export const dummyBio = {
  bruce: "🦇 Billionaire by day, crime-fighting vigilante by night. 🌃",
  eren: "🔥 A passionate and determined soldier fighting for humanity's survival against the Titans. ⚔️🛡️",
  mikasa:
    "🌸 A complex individual, battling her own personal demons while fighting for the survival of humanity. 🌺🌍",
  syeda:
    "🌟 Embracing the power of education to shape a brighter future and achieve personal goals. 💡🌍",
  peter:
    "🕷️ Your friendly neighborhood Spider-Man, dedicated to protecting New York City from all threats. 🏙️🕷️",
  tony: "🔥 Genius, billionaire, playboy, philanthropist, and armored Avenger. 💼💰🤖⚡️",
  steve:
    "🌟 Leader of the Avengers, assembling Earth's mightiest heroes to protect the planet from threats. 🦸‍♂️⚡️",
  mary: "🎓 High school sweetheart of Peter Parker, sharing a deep bond and understanding of his dual life. 💑🕷️",
  gwen: "🌸 Brilliant and talented, navigating the worlds of academics, music, and Peter Parker's heart. 🎓🎵❤️",
};

export const dummyLink = {
  bruce: "www.batmanssecretdisguise.com",
  eren: "www.titanhugger.com",
  mikasa: "www.expertscarfreestyles.com",
  syeda: "www.worldsbeststudent.com",
  peter: "www.howtosticktoceilings101.com",
  tony: "www.confidentlycockygenius.com",
  steve: "www.howtogrowabeardquickly.com",
  mary: "www.professionalredheadsociety.com",
  gwen: "www.musicianspiderweb.com",
};

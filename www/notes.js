var appKey = 'hc_use';

var qtitle = {
    "Bullied": "Percentage of teens aged 12-17 years who were ever bullied in the past 12 months, United States, ",
    "Bullied others": "Percentage of teens aged 12-17 years who ever bullied others in the past 12 months, United States, ",
    "Electronically bullied": "Percentage of teens aged 12-17 years who were ever electronically bullied in the past 12 months, United States, ",
    "Electronically bullied others": "Percentage of teens aged 12-17 years who ever electronically bullied others in the past 12 months, United States, ",

    "Death of a parent or guardian": "Percentage of teens aged 12-17 years who ever had a parent or guardian die, United States, ",
    "Divorced or separated parents": "Percentage of teens aged 12-17 years who ever had divorced or separated parents, United States, ",
    "Victim or witness of neighborhood violence": "Percentage of teens aged 12-17 years who have ever been a victim of or witness of neighborhood violence, United States, ",
    "Incarcerated parents": "Percentage of teens aged 12-17 years who ever had incarcerated parents, United States, ",
    "Household member with mental illness": "Percentage of teens aged 12-17 years who ever lived with a household member with mental illness, United States, ",
    "Household member with substance abuse": "Percentage of teens aged 12-17 years who ever lived with a household member with a substance abuse problem, United States, ",
    "Experienced emotional abuse": "Percentage of teens aged 12-17 years who ever experienced emotional abuse, United States, ",
    "Unmet basic needs": "Percentage of teens aged 12-17 years who ever had unmet basic needs, United States, ",
    "Experienced discrimination due to race or ethnic group": "Percentage of teens aged 12-17 years who ever experienced discrimination due to race or ethnic group, United States, ",
    "Experienced discrimination due to sexual orientation or gender identity": "Percentage of teens aged 12-17 years who ever experienced discrimination due to sexual orientation or gender identity, United States, ",

    "Ever treated with less courtesy": "Percentage of teens aged 12-17 years who were ever treated with less courtesy than others their age, United States, ",
    "Ever received poorer service": "Percentage of teens aged 12-17 years who ever received poorer service than others their age, United States, ",
    "Ever perceived as not smart": "Percentage of teens aged 12-17 years who were ever perceived as not smart, United States, ",

    "Social and emotional support": "Percentage of teens aged 12-17 years who always or usually received social and emotional support in the past 12 months, United States, ",
    "Peer support": "Percentage of teens aged 12-17 years who received peer support a lot of the time, United States, ",
    "Parent support": "Percentage of teens aged 12-17 years who received parent support a lot of the time, United States,  ",
    "Community support": "Percentage of teens aged 12-17 years who have at least one adult in life who makes a positive difference, United States, ",

    "Met privately with healthcare professional": "Percentage of teens aged 12-17 years who met privately with healthcare professional in the past 12 months, United States, ",
    "Discussed healthcare transition": "Percentage of teens aged 12-17 years who discussed healthcare transition with healthcare professional in the past 12 months, United States, ",
    "Discussed managing health and health care": "Percentage of teens aged 12-17 years who discussed managing health and health care with healthcare professional in the past 12 months, United States, ",
    "Discussed tobacco use": "Percentage of teens aged 12-17 years who discussed tobacco use with healthcare professional in the past 12 months, United States, ",
    "Discussed mental or emotional health": "Percentage of teens aged 12-17 years who discussed mental and emotional health with healthcare professional in the past 12 months, United States, ",
    "Discussed puberty and sexual health": "Percentage of teens aged 12-17 years who discussed puberty and sexual health with healthcare professional in the past 12 months, United States, ",

    "Symptoms of depression": "Percentage of teens aged 12-17 years with symptoms of depression during the past 2 weeks, United States, ",
    "Symptoms of anxiety": "Percentage of teens aged 12-17 years with symptoms of anxiety during the past 2 weeks, United States, ",
    "Any prescription medication for mental health": "Percentage of teens aged 12-17 years who took prescription medication to help with emotions, concentration, behavior or mental health in the past 12 months, United States, ",
    "Any mental health therapy": "Percentage of teens aged 12-17 years who received any mental health therapy in the past 12 months, United States, ",
    "Unmet mental health care": "Percentage of teens aged 12-17 years who had any unmet mental health care needs in the past 12 months, United States, ",

    "Sports team participation": "Percentage of teens aged 12-17 years who participated on a sports team in the past 12 months, United States, ",
    "Took physical education class": "Percentage of teens aged 12-17 years who took a physical education class in the past 12 months, United States, ",
    "Physically active for at least 60 minutes": "Percentage of teens aged 12-17 years who are physically active for at least 60 minutes most days or every day, United States, ",
    "Strength training": "Percentage of teens aged 12-17 years who strength train most days or every day, United States, ",
    "Walked for at least 10 minutes": "Percentage of teens aged 12-17 years who walked for at least 10 minutes most days or every day, United States, ",
    "Biked for at least 10 minutes": "Percentage of teens aged 12-17 years who biked for at least 10 minutes most days or every day, United States, ",

    "Wake up well-rested": "Percentage of teens aged 12-17 years who wake up well-rested most days or every days, United States, ",
    "Difficulty getting out of bed": "Percentage of teens aged 12-17 years who have difficulty getting out of bed most days or every day, United States, ",
    "Complain about being tired": "Percentage of teens aged 12-17 years who complain about being tired most days or every day, United States, ",
    "Take naps or fall asleep during the day": "Percentage of teens aged 12-17 years who take naps or fall asleep during the day most days or every day, United States,  ",
    "Regular bedtime": "Percentage of teens aged 12-17 years who have a regular bedtime most days or every day, United States, ",
    "Regular wake time": "Percentage of teens aged 12-17 years who have a regular wake up time most days or every day, United States, ",

    "2 or more hours of screentime": "Percentage of teens aged 12-17 years who have more than 2 hours of screentime per day, United States, ",

    "Meditation": "Percentage of teens aged 12-17 years who used meditation in the past 12 months, United States, ",
    "Yoga": "Percentage of teens aged 12-17 years who practiced yoga in the past 12 months, United States, ",
    "Chiropractor visit": "Percentage of teens aged 12-17 years who saw a chiropractor in the past 12 months, United States, ",

    "Concerned about weight": "Percentage of teens aged 12-17 years who are concerned about their weight, United States, ",
    "Fair or poor health": "Percentage of teens aged 12-17 years who have fair or poor health, United States, ",

};

var mepsNotes = {
    "sex": "\n<h4>Sex<\/h4>\n Based on the Sample Child interview. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\SEX_C.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "agegrps": "\n<h4>Age<\/h4>\n Based on the Sample Child interview. Respondents were asked to report the age of each family member as of the date of interview. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\AGEP_C.pdf\" target=\"_blank_\">child codebook. <\/a> \n",
    "hisprace": "\n<h4>Hispanic ethnicity<\/h4>\n<p>Based on the Sample Child interview. \"Hispanic\" indicates Hispanic or Latino origin and refers to children who are of Hispanic or Latino origin and may be of any race or combination of races. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\HISLOR_C.pdf\" target=\"_blank_\">child codebook. <\/a> <\/p>\n",
    "race": "\n<h4>Race<\/h4>\n<p>Based on the Sample Child interview. Race is based on a respondent's description of the Sample Child's racial background, regardless of Hispanic or Latino origin. Federal surveys give respondents the option of reporting more than one race. Therefore, two basic ways of defining a race group are possible. A group may be defined as those who reported one race and no other race (single race concept) or as those who reported that race regardless of whether they also reported another race (single or multiple races concept). This grouping shows data using the single race approach. The use of this approach does not imply that it is the preferred method of presenting or analyzing data. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\RACEALLP_C.pdf\" target=\"_blank_\">child codebook. <\/a> <\/p>\n",
    "education": "\n<h4>Parental education<\/h4>\nBased on the Sample Child interview. Refers to the education level of the parent with the higher level of education, regardless of that parent's age, provided the parent(s) live(s) in the household. GED is General Educational Development high school equivalency diploma. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\MAXPAREDUC_C.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "insurance": "\n<h4>Health insurance coverage<\/h4>\n Based on the Sample Child interview. Categories based on a hierarchy of mutually exclusive categories. Children with more than one type of health insurance were assigned to the first appropriate category in the following hierarchy: private, Medicaid or other public. Categories of other coverage, or uninsured are not shown due to small sample size and reliability concerns. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\COVER_C.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "poverty": "\n<h4>Family income<\/h4>\n Based on the Sample Child interview. FPL is federal poverty level, which is based on the ratio of the family's income in the previous calendar year to the appropriate poverty threshold defined by the U.S. Census Bureau. Family income was imputed when missing. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\POVRATTC_C.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "metro": "\n<h4>Urbanicity<\/h4>\n<p>Based on the 2013 NCHS Urban-Rural Classification Scheme for Counties which groups U.S. counties and county-equivalent entities into six urban-rural categories: large central metro, large fringe metro, medium metro, small metro, micropolitan, and non-core. For Interactive Summary Health Statistics for Teens, large central metro and large fringe metro are collapsed into a single group, medium and small metro are collapsed into a single group and micropolitan and non-core are collapsed into a single group (nonmetropolitan). More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\URBRRL.pdf\" target=\"_blank_\">child codebook. <\/a><\/p>\n",
    "region": "\n<h4>Region<\/h4>\n Based on the location of the household residence. In the geographic classification of the U.S. population, states are grouped into four regions used by the U.S. Census Bureau:\n<ul>\n  <li><i>Northeast:<\/i> Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, and Pennsylvania.<\/li>\n\n  <li><i>Midwest:<\/i> Ohio, Indiana, Illinois, Michigan, Wisconsin, Minnesota, Iowa, Missouri, North Dakota, South Dakota, Nebraska, and Kansas.<\/li>\n\n  <li><i>South:<\/i><\/i> Delaware, Maryland, District of Columbia, Virginia, West Virginia, North Carolina, South Carolina, Georgia, Florida, Kentucky, Tennessee, Alabama, Mississippi, Arkansas, Louisiana, Oklahoma, and Texas.<\/li>\n\n  <li><i>West:<\/i> Montana, Idaho, Wyoming, Colorado, New Mexico, Arizona, Utah, Nevada, Washington, Oregon, California, Alaska, and Hawaii.<\/li>\n<\/ul> More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\REGION.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "disability": "\n<h4>Disability status<\/h4>\n<p> Based on the Sample Child interview. Those with \"a lot of difficulty\" or with responses of \"cannot do at all\" for at least one of the questions asking about difficulty seeing, hearing, walking, self-care, communication, learning, remembering, concentrating, accepting change, controlling behavior, making friends or who had a response of \"daily\" to questions asking how often the sample child feels anxious, nervous, or worried or feels depressed are considered with disability. The remaining sample children, that is those with \"some difficulty\" or \"no difficulty\" for at least one question (and did not have responses of \"a lot of difficulty\" or \"cannot do at all\" for any of the questions) are classified as without disability. Those with responses of \"don't know\" or \"refused\" to all questions are excluded. More information on the questions and variables used for this measure can be found in the child codebook. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\DISAB.pdf\" target=\"_blank_\">child codebook. <\/a><\/ p >\n",
    "sogi": "\n<h4>Sexual orientation<\/h4>\n<p>Based on the Teen interview. Respondents were asked, \"Which of the following best represents how you think of yourself?\" and answer choices were \"Gay or lesbian; Stright, that is not gay or lesbian; Bisexual; Something else; I am not sure/ I don't know the answer\". More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\ORIENT_A.pdf\" target=\"_blank_\">adult codebook. <\/a><\/p>\n",
    "parnum": "\n<h4>Number of residential parents<\/h4>\nBased on the Sample Child interview. Categories based on a count of all residential parents (non-foster and foster) to Sample Child. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\PCNTPARNTS_C.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "devdis": "\n<h4>Any developmental disability<\/h4>\nBased on the Sample Child interview. Children were considered to have a developmental disability if they were diagnosed with one or more of the five selected developmental disabilities: Attention Deficit Disorder (ADD) or Attention-Deficit/Hyperactivity Disorder (ADHD), autism spectrum disorder, intellectual disability, learning disability, or other developmental delay. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\DD_ANY.pdf\" target=\"_blank_\">child codebook. <\/a>\n",
    "gender": "\n<h4>Sexual or gender minority<\/h4>\n<p>Based on three questions from the teen interview inquiring about sexual orientation and gender identity. Sexual minority: Respondents were asked \"Which of the following best represents how you think of yourself?\" and answer choices were \"Gay or lesbian; Straight, that is not gay or lesbian; Bisexual; Something else; I'm not sure / I don't know the answer\". Respondents who answered \"Straight, that is not gay or lesbian\" were considered to not be a sexual minority.  Gender minority: Respondents were asked about gender identity with two questions. First, \"What sex were you assigned at birth, on your original birth certificate ?\" and answer choices were \"Male; Female; I don't know\". Second, \"How do you currently describe yourself ?\" \"Male; Female; Transgender; None of these; I'm not sure / I don't know the answer\".  Respondents whose sex matched between the two questions were not considered to be a gender minority. Respondents who answered \"I don't know\" for the first question, and \"Male\" or \"Female\" for the second question were considered missing. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\ORIENT_A.pdf\" target=\"_blank_\">teen questionnaire. <\/a><\/p>\n",
};


var qmepsNotes = {
    "Bullied": "\n<h4>Bullied<\/h4>\n<p>Based on the question, \"During the past 12 months, how often were you bullied, picked on, or excluded by other youth?\" Response options were, \"Never in the past 12 months; 1-2 times in the past 12 months; 1-2 times per month; 1-2 times per week; Almost every day.\" Estimates presented are based on responses of, \"1 - 2 times in the past 12 months; 1-2 times per month; 1-2 times per week; Almost every day.\"<\/p>\n",
    "Bullied others": "\n<h4>Bullied others<\/h4>\n<p>Based on the question, \"During the past 12 months, how often did you bully others, pick on them, or exclude them?\" Response options were, \"Never in the past 12 months; 1-2 times in the past 12 months; 1-2 times per month; 1-2 times per week; Almost every day.\" Estimates presented are based on responses of, \"1 - 2 times in the past 12 months; 1-2 times per month; 1-2 times per week; Almost every day.\" <\/p>\n",
    "Electronically bullied": "\n<h4>Electronically bullied<\/h4>\n<p>Based on the question, \"During the past 12 months, have you ever been electronically bullied?\" <\/p>\n",
    "Electronically bullied others": "\n<h4>Electronically bullied others<\/h4>\n<p>Based on the question, \"During the past 12 months, have you ever electronically bullied others?\" <\/p>\n",

    "Death of a parent or guardian": "\n<h4>Death of a parent or guardian<\/h4>\n<p>Based on the question, \"Have you ever had a parent or guardian die?\" <\/p>\n",
    "Divorced or separated parents": "\n<h4>Divorced or separated parents<\/h4>\n<p>Based on the question, \"Have you ever had a parent or guardian divorce or separate?\" <\/p>\n",
    "Victim or witness of neighborhood violence": "\n<h4>Victim or witness of neighborhood violence<\/h4>\n<p>Based on the question, \"Have you ever been the victim of violence or witnessed violence in your neighborhood?\" <\/p>\n",
    "Incarcerated parents": "\n<h4>Incarcerated parents<\/h4>\n<p>Based on the question, \"Have you ever been separated from a parent or guardian because they went to jail, prison, or a detention center?\" <\/p>\n",
    "Household member with mental illness": "\n<h4>Household member with mental illness<\/h4>\n<p>Based on the question, \"Have you ever lived with someone who was mentally ill or severely depressed?\" <\/p>\n",
    "Household member with substance abuse": "\n<h4>Household member with substance abuse<\/h4>\n<p>Based on the question, \"Have you ever lived with someone who was having a problem with alcohol or drug use?\" <\/p>\n",
    "Experienced emotional abuse": "\n<h4>Experienced emotional abuse<\/h4>\n<p>Based on the question, \"Have you ever lived with a parent or adult who frequently swore at you, insulted you, or put you down?\" <\/p>\n",
    "Unmet basic needs": "\n<h4>Unmet basic needs<\/h4>\n<p>Based on the question, \"Has there ever been a time when your basic needs were not met, such as having enough to eat, being able to go to a doctor when you were sick, or having a safe place to stay?\" <\/p>\n",
    "Experienced discrimination due to race or ethnic group": "\n<h4>Experienced discrimination due to race or ethnic group<\/h4>\n<p>Based on the question, \"Has anyone ever treated or judged you unfairly because of your race or ethnic group?\" <\/p>\n",
    "Experienced discrimination due to sexual orientation or gender identity": "\n<h4>Experienced discrimination due to sexual orientation or gender identity<\/h4>\n<p>Based on the question, \"Has anyone ever treated or judged you unfairly because of your sexual orientation or gender identity?\" <\/p>\n",

    "Ever treated with less courtesy": "\n<h4>Ever treated with less courtesy<\/h4>\n<p>Based on the statement, \"You are treated with less courtesy or respect than other people your age.\" Response options were, \"Almost everyday; At least once a week; A few times a month; A few times a year; Less than once a year; Never.\" Estimates presented are based on responses of, \"Almost everyday; At least once a week; A few times a month; A few times a year; Less than once a year.\" <\/p>\n",
    "Ever received poorer service": "\n<h4>Ever received poorer service <\/h4>\n<p>Based on the statement, \"You receive poorer service than other people your age at restaurants or stores.\" Response options were, \"Almost everyday; At least once a week; A few times a month; A few times a year; Less than once a year; Never.\" Estimates presented are based on responses of,\"Almost everyday; At least once a week; A few times a month; A few times a year; Less than once a year.\" <\/p>\n",
    "Ever perceived as not smart": "\n<h4>Ever perceived as not smart<\/h4>\n<p>Based on the statement, \"People act as if they think you are not smart.\" Response options were, \"Almost everyday; At least once a week; A few times a month; A few times a year; Less than once a year; Never.\" Estimates presented are based on responses of, \"Almost everyday; At least once a week; A few times a month; A few times a year; Less than once a year.\" <\/p>\n",

    "Social and emotional support": "\n<h4>Social and emotional support<\/h4>\n<p>Based on the question, \"How often do you get the social and emotional support you need?\" Response options were, \"Always; Usually; Sometimes; Rarely; Never.\" Estimates presented are based on responses of, \"Always; Usually.\" <\/p>\n",
    "Peer support": "\n<h4>Peer support<\/h4>\n<p>Based on the questions, \"How much can you rely on your friends for help if you have a serious problem?\" and \"How much can you open up to your friends if you need to talk about your worries?\" Response options were, \"A lot; Some; A little; Not at all.\" Estimates presented are based on responses of, \"A lot\" to either question. <\/p>\n",
    "Parent support": "\n<h4>Parent support<\/h4>\n<p>Based on the questions, \"How much can you rely on your parents or guardians for help if you have a serious problem?\" and \"How much can you open up to your parents or guardians if you need to talk about your worries?\" Response options were, \"A lot; Some; A little; Not at all.\" Estimates presented are based on responses of, \"A lot\" to either question. <\/p>\n",
    "Community support": "\n<h4>Community support<\/h4>\n<p>Based on the question, \"Other than parents or adults living in your home, is there at least one adult in your school, neighborhood, or community who makes a positive and meaningful difference in your life?\" <\/p>\n",

    "Met privately with healthcare professional": "\n<h4>Met privately with healthcare professional<\/h4>\n<p>Based on the questions, \"At this last medical care visit, did you have a chance to speak with a doctor or other health professional privately, without a parent or guardian in the room?\" and \"At this last wellness visit, physical, or general purpose check-up did you have a chance to speak with a doctor or other health professional privately, without a parent or guardian in the room?\" Respondents who did not see a health professional in the past 12 months were included in the denominator and categorized as not having met privately with a healthcare professional. <\/p>\n",
    "Discussed healthcare transition": "\n<h4>Discussed healthcare transition<\/h4>\n<p>Based on the question, \"During the past 12 months, has a doctor or other health professional talked to you about understanding the changes in health care who happen at age 18?\" Respondents who did not see a health professional in the past 12 months were included in the denominator and categorized as not having discussed healthcare transition with a healthcare professional. <\/p>\n",
    "Discussed managing health and health care": "\n<h4>Discussed managing health and health care<\/h4>\n<p>Based on the question, \"During the past 12 months, has a doctor or other health professional talked to you about gaining skills to manage your health and health care?\" Respondents who did not see a health professional in the past 12 months were included in the denominator and categorized as not having discussed managing health and health care with a healthcare professional. <\/p>\n",
    "Discussed tobacco use": "\n<h4>Discussed tobacco use<\/h4>\n<p>Based on the question, \"During the past 12 months, has a doctor or other health professional asked you about using tobacco products or smoking?\" Respondents who did not see a health professional in the past 12 months were included in the denominator and categorized as not having discussed tobacco use with a healthcare professional. <\/p>\n",
    "Discussed mental or emotional health": "\n<h4>Discussed mental or emotional health<\/h4>\n<p>Based on the question, \"During the past 12 months, has a doctor or other health professional asked you about your mental or emotional health?\" Respondents who did not see a health professional in the past 12 months were included in the denominator and categorized as not having discussed mental and emotional health with a healthcare professional. <\/p>\n",
    "Discussed puberty and sexual health": "\n<h4>Discussed puberty and sexual health<\/h4>\n<p>Based on the question, \"During the past 12 months, has a doctor or other health professional talked with you about changes to your developing body, or safe sex practices?\" Respondents who did not see a health professional in the past 12 months were included in the denominator and categorized as not having discussed puberty and sexual health with a healthcare professional. <\/p>\n",

    "Symptoms of depression": "\n<h4>Symptoms of depression<\/h4>\n<p>Symptoms of depression is defined by a score of 3 or more based on answers to the two question items known as the Patient Health Questionnaire-2 (PHQ-2). PHQ-2 questions, \"Over the last two weeks, how often have you been bothered by having little interest or pleasure in doing things?\" and \"Over the last two weeks, how often have you been bothered by feeling down, depressed or hopeless?\". Response options were \"Not at all; Several days; More than half the days; Nearly every day\" with scores assigned 0, 1, 2, or 3, respectively. <\/p>\n",
    "Symptoms of anxiety": "\n<h4>Symptoms of anxiety<\/h4>\n<p>Symptoms of anxiety is defined by a score of 3 or more based on answers to the two question items known as the Generalized Anxiety Disorder (GAD-2). GAD-2 questions, \"Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?\" and \"Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?\". Response options were \"Not at all; Several days; More than half the days; Nearly every day\" with scores assigned 0, 1, 2, or 3, respectively. <\/p>\n",
    "Any prescription medication for mental health": "\n<h4>Any prescription medication for mental health <\/h4>\n<p>Based on the question, \"During the past 12 months, did you take any prescription medication to help with your emotions, concentration, behavior or mental health?\" <\/p>\n",
    "Any mental health therapy": "\n<h4>Any mental health therapy<\/h4>\n<p>Based on the question, \"During the past 12 months, did you receive counseling or therapy from a mental health professional such as a psychiatrist, psychologist, psychiatric nurse, or clinical social worker?\" <\/p>\n",
    "Unmet mental health care": "\n<h4>Unmet mental health care<\/h4>\n<p>Based on the questions, \"During the past 12 months, was there any time when you needed counseling or therapy from a mental health professional, but did not get it because of cost?\", or \"During the past 12 months, was there any time when you needed counseling or therapy from a mental health professional, but did not get it because you were afraid of what others would think of you?\", or \"During the past 12 months, was there any time when you needed counseling or therapy from a mental health professional, but did not get it because you didn't know where to go or how to get help?\" <\/p>\n",

    "Sports team participation": "\n<h4>Sports team participation<\/h4>\n<p>Based on the question, \"In the past 12 months, did you play or participate on a sports team or club or take sports lessons either at school or in the community?\" <\/p>\n",
    "Took physical education class": "\n<h4>Took physical education class<\/h4>\n<p>Based on the question, \"In the past 12 months, did you take a physical education, PE, or gym class?\" <\/p>\n",
    "Physically active for at least 60 minutes": "\n<h4>Physically active for at least 60 minutes<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you exercise, play a sport, or participate in physical activity for at least 60 minutes a day?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Strength training": "\n<h4>Strength training<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you do exercises to strengthen or tone your muscles, such as sit- ups, push-ups, or weight lifting ?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Walked for at least 10 minutes": "\n<h4>Walked for at least 10 minutes<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you walk for at least 10 minutes at a time?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Biked for at least 10 minutes": "\n<h4>Biked for at least 10 minutes<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you ride a bike for at least 10 minutes at a time?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",

    "Wake up well-rested": "\n<h4>Wake up well-rested<\/h4>\n<p> Based on the question, \"In a typical week during the school year, how often do you wake up well- rested ?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Difficulty getting out of bed": "\n<h4>Difficulty getting out of bed<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you have difficulty getting out of bed in the morning? \" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Complain about being tired": "\n<h4>Complain about being tired<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you complain about being tired during the day?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Take naps or fall asleep during the day": "\n<h4>Take naps or fall asleep during the day<\/h4>\n<p>Based on the question, \"In a typical week during the school year, how often do you nap or fall asleep during the day, such as in school, watching TV, or riding in a car?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\"<\/p>\n",
    "Regular bedtime": "\n<h4>Regular bedtime<\/h4>\n<p>Based on the question, \"In a typical week during the school year, on nights you have school the next day, how often do you go to bed at the same time?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",
    "Regular wake time": "\n<h4>Regular wake time<\/h4>\n<p>Based on the question, \"In a typical week during the school year, on school days, how often do you wake up at the same time?\" Response options were, \"Never; Some days; Most days; Every day.\" Estimates presented are based on responses of, \"Most days; Every day.\" <\/p>\n",

    "2 or more hours of screentime": "\n<h4>2 or more hours of screentime<\/h4>\n<p>Based on the question, \"On most weekdays, how many hours do you spend a day in front of a TV, computer, cellphone or other electronic device watching programs, playing games, accessing the internet, or using social media?\" <\/p>\n",

    "Meditation": "\n<h4>Meditation<\/h4>\n<p>Based on the question, \"Meditation includes Mindfulness, Mantra, and Spiritual meditation.  During the past 12 months did you use any of these types of meditation?\" <\/p>\n",
    "Yoga": "\n<h4>Yoga<\/h4>\n<p>Based on the question, \"During the past 12 months did you practice yoga?\"<\/p>\n",
    "Chiropractor visit": "\n<h4>Chiropractor visit<\/h4>\n<p>Based on the question, \"During the past 12 months did you see a chiropractor?\" <\/p>\n",

    "Concerned about weight": "\n<h4>Concerned about weight<\/h4>\n<p>Based on the question, \"Are you concerned about your weight?\" Response options were, \"Yes, it's too high; Yes, it's too low; No.\" Estimates presented are based on responses of, \"Yes, it's too high; Yes, it's too low.\" <\/p>\n",
    "Fair or poor health": "\n<h4>Fair or poor health<\/h4>\n<p>Based on the question, \"Would you say your health in general is excellent, very good, good, fair, or poor?\"  Estimates presented are based on responses of, \"Fair; Poor.\" <\/p>\n",

};
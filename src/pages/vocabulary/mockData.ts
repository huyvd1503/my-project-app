// src/pages/vocabulary/mockData.ts
import type { VocabularyTopic } from '../../types/vocabulary';

export const mockTopicData: VocabularyTopic = {
  id: 'countryside',
  title: 'The Countryside',
  vocabulary: [
    {
      word: 'rice fields',
      meaning: 'ruộng lúa',
      example: 'In the countryside, there are many rice fields and mountains.',
    },
    {
      word: 'rivers',
      meaning: 'sông',
      example: 'The rivers in the countryside are very clean.',
    },
    {
      word: 'mountains',
      meaning: 'núi',
      example: 'The mountains provide beautiful scenery for the countryside.',
    },
    {
      word: 'fresher air',
      meaning: 'không khí trong lành hơn',
      example: 'People move to the countryside to enjoy fresher air.',
    },
    {
      word: 'cost of living is cheap',
      meaning: 'chi phí sinh hoạt rẻ',
      example: 'The cost of living is cheap, so I can save a lot of money.',
    },
    {
      word: 'friendly people',
      meaning: 'người thân thiện',
      example:
        'People in the countryside are very friendly and often talk to each other every day.',
    },
    {
      word: 'lower incomes',
      meaning: 'thu nhập thấp hơn',
      example: 'One disadvantage is that people in the countryside have lower incomes.',
    },
  ],
  sentencePatterns: [
    {
      pattern: 'I like the countryside because it has fresh air and friendly people.',
      highlightedWords: ['countryside', 'fresh air', 'friendly people'],
    },
    {
      pattern: 'There are many rice fields and rivers, which are very beautiful.',
      highlightedWords: ['rice fields', 'rivers', 'beautiful'],
    },
    {
      pattern: 'Living there is cheap, so people can save money.',
      highlightedWords: ['cheap', 'save money'],
    },
    {
      pattern: 'However, it can be boring because there are not many restaurants or cinemas.',
      highlightedWords: ['boring', 'restaurants', 'cinemas'],
    },
  ],
  sampleEssay: {
    english: `I love the countryside because it is peaceful and quiet.
There are many beautiful places like rice fields, rivers and mountains.
The air is fresh and clean, and the cost of living is cheap.
People there are friendly and often talk to each other.
However, life in the countryside can be boring because there are not many restaurants or cinemas.
In general, I think the countryside is a great place to relax.`,
    vietnamese: `Tôi thích vùng quê vì nơi đó yên bình và tĩnh lặng.
Có nhiều nơi đẹp như ruộng lúa, sông và núi.
Không khí trong lành và sạch sẽ, và chi phí sinh hoạt rẻ.
Người dân ở đó thân thiện và thường xuyên trò chuyện với nhau.
Tuy nhiên, cuộc sống ở nông thôn có thể nhàm chán vì không có nhiều nhà hàng hoặc rạp chiếu phim.
Nhìn chung, tôi nghĩ nông thôn là một nơi tuyệt vời để thư giãn.`,
  },
  speakingQuestions: [
    {
      question: 'Do you like living in the countryside or the city? Why?',
      suggestions: ['Consider mentioning: peace, fresh air, community, or conveniences'],
    },
    {
      question: 'What are the advantages of living in the countryside?',
      suggestions: ['Discuss: clean environment, cost of living, friendly people'],
    },
    {
      question: 'What can be difficult about living there?',
      suggestions: ['Think about: fewer entertainment options, lower incomes, fewer jobs'],
    },
  ],
};

export const mockTopicDataCity: VocabularyTopic = {
  id: 'city',
  title: 'The City',
  vocabulary: [
    {
      word: 'skyscrapers',
      meaning: 'tòa nhà chọc trời',
      example: 'Many modern cities have tall skyscrapers in the downtown area.',
    },
    {
      word: 'polluted air',
      meaning: 'không khí ô nhiễm',
      example: 'The city often has polluted air because of heavy traffic.',
    },
    {
      word: 'heavy traffic',
      meaning: 'giao thông đông đúc',
      example: 'Heavy traffic makes it difficult to travel during rush hours.',
    },
    {
      word: 'cost of living is expensive',
      meaning: 'chi phí sinh hoạt đắt đỏ',
      example: 'The cost of living is expensive in the city compared to the countryside.',
    },
    {
      word: 'more career opportunities',
      meaning: 'nhiều cơ hội nghề nghiệp hơn',
      example: 'Living in the city offers more career opportunities.',
    },
    {
      word: 'many entertainments',
      meaning: 'nhiều hoạt động giải trí',
      example: 'Cities have many entertainments like cinemas, parks, and restaurants.',
    },
    {
      word: 'convenient life',
      meaning: 'cuộc sống tiện lợi',
      example: 'Life in the city is more convenient because everything is nearby.',
    },
  ],
  sentencePatterns: [
    {
      pattern: 'I like living in the city because it has many entertainment options.',
      highlightedWords: ['city', 'entertainment options'],
    },
    {
      pattern: 'There are many skyscrapers and shopping malls in the city.',
      highlightedWords: ['skyscrapers', 'shopping malls'],
    },
    {
      pattern: 'Life is more convenient because I live near supermarkets and hospitals.',
      highlightedWords: ['convenient', 'supermarkets', 'hospitals'],
    },
    {
      pattern: 'However, the air is polluted and the traffic is heavy.',
      highlightedWords: ['polluted', 'traffic', 'heavy'],
    },
  ],
  sampleEssay: {
    english: `I enjoy living in the city because it is lively and convenient.
There are many skyscrapers, shopping malls, and restaurants.
Life here is more convenient as I live near supermarkets, schools, and hospitals.
There are also many entertainments like parks, cinemas, and cafes.
However, the city has some disadvantages such as polluted air, heavy traffic, and high living costs.
In general, I think the city is a great place for people who love an active lifestyle.`,
    vietnamese: `Tôi thích sống ở thành phố vì nó sôi động và tiện lợi.
Có nhiều tòa nhà chọc trời, trung tâm mua sắm và nhà hàng.
Cuộc sống ở đây tiện lợi hơn vì tôi sống gần siêu thị, trường học và bệnh viện.
Cũng có nhiều hoạt động giải trí như công viên, rạp chiếu phim và quán cà phê.
Tuy nhiên, thành phố cũng có một số nhược điểm như không khí ô nhiễm, giao thông đông đúc và chi phí sinh hoạt cao.
Nhìn chung, tôi nghĩ thành phố là nơi tuyệt vời cho những người thích lối sống năng động.`,
  },
  speakingQuestions: [
    {
      question: 'Do you prefer living in the city or the countryside? Why?',
      suggestions: ['Mention: convenience, career opportunities, lifestyle'],
    },
    {
      question: 'What are the advantages of living in the city?',
      suggestions: ['Discuss: more entertainments, convenience, higher incomes'],
    },
    {
      question: 'What are the disadvantages of living in the city?',
      suggestions: ['Think about: pollution, traffic, high cost of living'],
    },
  ],
};

export const mockTopicDataHealth: VocabularyTopic = {
  id: 'health',
  title: 'Health',
  vocabulary: [
    {
      word: 'eat healthy food',
      meaning: 'ăn thực phẩm lành mạnh',
      example: 'We should eat healthy food such as fruits, fish, and vegetables.',
    },
    {
      word: 'junk food',
      meaning: 'đồ ăn nhanh, đồ ăn vặt không tốt cho sức khỏe',
      example: 'Eating too much junk food can cause health problems.',
    },
    {
      word: 'exercise everyday',
      meaning: 'tập thể dục hàng ngày',
      example: 'I try to exercise every day to keep fit.',
    },
    {
      word: 'health check-up',
      meaning: 'kiểm tra sức khỏe định kỳ',
      example: 'It is important to have a regular health check-up to detect diseases early.',
    },
    {
      word: 'immune system',
      meaning: 'hệ miễn dịch',
      example: 'A healthy lifestyle can help you have a better immune system.',
    },
    {
      word: 'high blood pressure',
      meaning: 'cao huyết áp',
      example: 'High blood pressure can be caused by unhealthy eating habits.',
    },
    {
      word: 'heart disease',
      meaning: 'bệnh về tim mạch',
      example: 'Too much cholesterol can lead to heart disease.',
    },
  ],
  sentencePatterns: [
    {
      pattern: 'I stay healthy by eating healthy food and exercising every day.',
      highlightedWords: ['stay healthy', 'eating healthy food', 'exercising'],
    },
    {
      pattern: 'Having a regular health check-up can help find diseases early.',
      highlightedWords: ['health check-up', 'find diseases early'],
    },
    {
      pattern: 'Eating too much junk food increases the risk of health problems.',
      highlightedWords: ['junk food', 'health problems'],
    },
    {
      pattern: 'A good diet helps improve our immune system and keeps us strong.',
      highlightedWords: ['diet', 'immune system', 'strong'],
    },
  ],
  sampleEssay: {
    english: `Health is very important in our life. 
To stay healthy, we should eat more fruits, fish, and vegetables, and drink enough water every day. 
We should also eat less meat, fat food, and junk food. 
Doing exercise every day and having regular health check-ups are also important. 
These good habits help us stay fit, have a better immune system, and feel more relaxed.
On the other hand, eating too much unhealthy food and not exercising regularly can cause health problems like obesity, diabetes, and heart disease. 
Therefore, we should build good habits to protect our health.`,
    vietnamese: `Sức khỏe rất quan trọng trong cuộc sống của chúng ta.
Để giữ sức khỏe, chúng ta nên ăn nhiều trái cây, cá, rau và uống đủ nước mỗi ngày.
Chúng ta cũng nên ăn ít thịt, đồ ăn nhiều dầu mỡ và đồ ăn nhanh.
Tập thể dục hàng ngày và kiểm tra sức khỏe định kỳ cũng rất quan trọng.
Những thói quen tốt này giúp chúng ta giữ dáng, có hệ miễn dịch tốt hơn và cảm thấy thư giãn.
Ngược lại, ăn quá nhiều đồ ăn không lành mạnh và không tập thể dục thường xuyên có thể gây ra các vấn đề sức khỏe như béo phì, tiểu đường và bệnh tim mạch.
Vì vậy, chúng ta nên xây dựng thói quen tốt để bảo vệ sức khỏe.`,
  },
  speakingQuestions: [
    {
      question: 'What do you usually do to stay healthy?',
      suggestions: ['Mention: eating healthy food, exercising, health check-ups'],
    },
    {
      question: 'What are some bad habits that can harm your health?',
      suggestions: ['Discuss: junk food, no exercise, skipping check-ups'],
    },
    {
      question: 'Why is it important to have regular health check-ups?',
      suggestions: ['Talk about: early detection of diseases, better treatment'],
    },
  ],
};

// Add this to src/pages/vocabulary/mockData.ts

export const mockTopicDataCrime: VocabularyTopic = {
  id: 'crime',
  title: 'Crime and Prevention',
  vocabulary: [
    {
      word: 'not be nurtured with love',
      meaning: 'không được nuôi dạy với tình yêu thương',
      example: 'Children who are not nurtured with love may develop behavioral problems.',
    },
    {
      word: 'parents are too busy with work',
      meaning: 'cha mẹ quá bận',
      example: 'Many children feel lonely because their parents are too busy with work.',
    },
    {
      word: 'get access to violent games',
      meaning: 'tiếp xúc trò chơi bạo lực',
      example: 'Young people who get access to violent games may become aggressive.',
    },
    {
      word: 'copy bad things on the internet',
      meaning: 'bắt chước hành vi xấu',
      example:
        'Teenagers sometimes copy bad things on the internet without understanding the consequences.',
    },
    {
      word: 'poverty',
      meaning: 'nghèo đói',
      example: 'Poverty is one of the main factors that can lead people to commit crimes.',
    },
    {
      word: 'commit crimes',
      meaning: 'phạm tội',
      example: 'Some people commit crimes because they feel they have no other options.',
    },
    {
      word: 'rehabilitation center',
      meaning: 'trung tâm phục hồi',
      example: 'The rehabilitation center helps criminals learn new skills and behaviors.',
    },
    {
      word: 'vocational training',
      meaning: 'học nghề',
      example:
        'Vocational training can help former criminals find jobs and reintegrate into society.',
    },
  ],
  sentencePatterns: [
    {
      pattern: 'Parents should spend more time with their children to prevent bad behavior.',
      highlightedWords: ['spend more time', 'prevent', 'bad behavior'],
    },
    {
      pattern: 'Many young people commit crimes because they copy bad things from the internet.',
      highlightedWords: ['commit crimes', 'copy bad things'],
    },
    {
      pattern: 'Poverty is one of the main causes of crime in many countries.',
      highlightedWords: ['poverty', 'causes of crime'],
    },
    {
      pattern: 'Criminals can learn how to behave well in rehabilitation centers.',
      highlightedWords: ['criminals', 'rehabilitation centers', 'behave well'],
    },
  ],
  sampleEssay: {
    english: `There are many causes of crime in modern society.
Some people are not loved or cared for by their families because their parents are too busy with work.
Many young people also play violent games or copy bad behavior from the internet.
Poverty is another cause because people commit crimes to survive.
To solve this problem, parents should spend more time with their children and guide them.
Criminals can also go to a rehabilitation center to learn how to behave and find a job later.`,
    vietnamese: `Có nhiều nguyên nhân gây ra tội phạm trong xã hội hiện đại.
Một số người không được gia đình yêu thương hoặc quan tâm vì cha mẹ họ quá bận rộn với công việc.
Nhiều người trẻ cũng chơi các trò chơi bạo lực hoặc bắt chước hành vi xấu từ internet.
Nghèo đói là một nguyên nhân khác vì người ta phạm tội để sinh tồn.
Để giải quyết vấn đề này, cha mẹ nên dành nhiều thời gian hơn cho con cái và hướng dẫn chúng.
Tội phạm cũng có thể đến trung tâm phục hồi để học cách cư xử và tìm việc làm sau này.`,
  },
  speakingQuestions: [
    {
      question: 'What are some causes of crime in your opinion?',
      suggestions: [
        'Poverty',
        'Lack of parental care',
        'Bad influence from media',
        'Lack of education',
      ],
    },
    {
      question: 'What can we do to prevent young people from committing crimes?',
      suggestions: [
        'Parents spending more time with children',
        'Better education',
        'Vocational training',
        'Community support',
      ],
    },
    {
      question: 'Do you think poverty is the main cause of crime?',
      suggestions: ['Consider multiple factors', 'Examples from society', 'Personal observations'],
    },
  ],
};

// Add this to src/pages/vocabulary/mockData.ts

export const mockTopicDataPublicTransport: VocabularyTopic = {
  id: 'public-transport',
  title: 'Public Transport',
  vocabulary: [
    {
      word: 'be safer',
      meaning: 'an toàn hơn',
      example: 'Public transport is generally safer than driving your own car.',
    },
    {
      word: 'have fewer accidents',
      meaning: 'ít tai nạn hơn',
      example: 'Buses and trains have fewer accidents compared to private vehicles.',
    },
    {
      word: 'never think about the weather',
      meaning: 'không lo về thời tiết',
      example:
        'When using public transport, you never think about the weather because you are protected.',
    },
    {
      word: 'feel comfortable and relaxed',
      meaning: 'cảm thấy thoải mái và thư giãn',
      example: 'On trains, you can feel comfortable and relaxed while reading a book.',
    },
    {
      word: 'listen to music',
      meaning: 'nghe nhạc',
      example: 'Many passengers listen to music during their commute.',
    },
    {
      word: 'read books',
      meaning: 'đọc sách',
      example: 'Public transport allows you to read books instead of focusing on driving.',
    },
    {
      word: 'be inconvenient',
      meaning: 'bất tiện',
      example: 'Public transport can be inconvenient when it does not run on time.',
    },
    {
      word: 'run slowly',
      meaning: 'chạy chậm',
      example: 'Buses often run slowly due to traffic congestion.',
    },
    {
      word: 'bad infrastructure',
      meaning: 'cơ sở hạ tầng kém',
      example: 'Bad infrastructure affects the reliability of public transport.',
    },
    {
      word: 'long waiting times',
      meaning: 'thời gian chờ đợi lâu',
      example: 'Long waiting times are a common complaint about public transport.',
    },
    {
      word: 'higher chance to get diseases',
      meaning: 'khả năng mắc bệnh cao hơn',
      example: 'In crowded trains, there is a higher chance to get diseases.',
    },
    {
      word: 'crowded at rush hours',
      meaning: 'đông đúc vào giờ cao điểm',
      example: 'Public transport is usually crowded at rush hours.',
    },
  ],
  sentencePatterns: [
    {
      pattern: 'Public transport is safer because there are fewer accidents.',
      highlightedWords: ['safer', 'fewer accidents'],
    },
    {
      pattern: 'When using buses or trains, you never need to worry about the weather.',
      highlightedWords: ['never', 'worry about the weather'],
    },
    {
      pattern:
        'Passengers can feel comfortable and relaxed by listening to music or reading books.',
      highlightedWords: ['comfortable', 'relaxed', 'listening to music', 'reading books'],
    },
    {
      pattern:
        'However, public transport can be inconvenient due to bad infrastructure and long waiting times.',
      highlightedWords: ['inconvenient', 'bad infrastructure', 'long waiting times'],
    },
    {
      pattern:
        'Buses and trains are usually crowded at rush hours, which increases the chance of getting sick.',
      highlightedWords: ['crowded', 'rush hours', 'chance of getting sick'],
    },
  ],
  sampleEssay: {
    english: `Public transport has both advantages and disadvantages.
On the one hand, it is safer because there are fewer accidents.
It is also convenient in bad weather like rain or storms, and passengers can feel relaxed by listening to music or reading books.
On the other hand, public transport can be inconvenient.
Some buses or trains run slowly due to bad infrastructure, and people often have to wait a long time.
Besides, it can be very crowded at rush hours, and there is a higher chance to get diseases.
In conclusion, public transport is useful, but it still needs many improvements.`,
    vietnamese: `Giao thông công cộng có cả ưu điểm và nhược điểm.
Một mặt, nó an toàn hơn vì có ít tai nạn hơn.
Nó cũng thuận tiện trong điều kiện thời tiết xấu như mưa hoặc bão, và hành khách có thể thư giãn bằng cách nghe nhạc hoặc đọc sách.
Mặt khác, giao thông công cộng có thể gây bất tiện.
Một số xe buýt hoặc tàu chạy chậm do cơ sở hạ tầng kém, và mọi người thường phải chờ đợi lâu.
Ngoài ra, nó có thể rất đông đúc vào giờ cao điểm, và có nguy cơ mắc bệnh cao hơn.
Tóm lại, giao thông công cộng rất hữu ích, nhưng vẫn cần nhiều cải tiến.`,
  },
  speakingQuestions: [
    {
      question: 'Do you often use public transport? Why or why not?',
      suggestions: ['Frequency of use', 'Reasons for preference', 'Experiences'],
    },
    {
      question: 'What are the main advantages of public transport in your opinion?',
      suggestions: ['Safety', 'Environmental benefits', 'Cost savings', 'Relaxation'],
    },
    {
      question: 'What improvements would you suggest for public transport in your city?',
      suggestions: ['Better infrastructure', 'More frequent service', 'Cleaner facilities'],
    },
  ],
};

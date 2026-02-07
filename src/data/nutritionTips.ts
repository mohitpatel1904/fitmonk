export interface NutritionTip {
  id: number;
  title: string;
  category: 'general' | 'weight-loss' | 'muscle-gain' | 'recovery' | 'vegetarian';
  description: string;
  content: string;
  image: string;
}

export const nutritionTips: NutritionTip[] = [
  {
    id: 1,
    title: 'Protein Intake for Muscle Recovery',
    category: 'muscle-gain',
    description: 'How much protein you need daily and the best sources to support muscle growth.',
    content: `Protein is essential for muscle repair and growth. Aim for 1.6-2.2g of protein per kg of bodyweight daily if you're actively training.

Top Protein Sources:
- Chicken breast (31g per 100g)
- Greek yogurt (10g per 100g)
- Eggs (6g per large egg)
- Lentils (9g per 100g cooked)
- Tofu (8g per 100g)
- Whey protein (20-25g per scoop)

Timing matters too - try to consume 20-40g of protein within 2 hours after your workout to optimize recovery. Distributing protein intake evenly throughout the day is more effective than consuming most of it in one meal.`,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80'
  },
  {
    id: 2,
    title: 'Hydration Strategies for Performance',
    category: 'general',
    description: 'Proper hydration guidelines for optimal physical performance and recovery.',
    content: `Proper hydration is crucial for peak performance and recovery. Even mild dehydration (2% of body weight) can impact exercise performance significantly.

Guidelines:
- Daily baseline: 2.7-3.7 liters of water from all sources
- Pre-workout: 500ml of water 2-3 hours before
- During workout: 150-250ml every 15-20 minutes
- Post-workout: 450-675ml for every pound lost during exercise

For intense workouts lasting over 60 minutes, consider a sports drink containing electrolytes, especially sodium and potassium to replace what's lost in sweat.`,
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&q=80'
  },
  {
    id: 3,
    title: 'Carb Cycling for Fat Loss',
    category: 'weight-loss',
    description: 'How to strategically vary carbohydrate intake to optimize fat loss.',
    content: `Carb cycling involves strategically alternating between high, moderate, and low carbohydrate intake days to promote fat loss while preserving muscle and performance.

Basic Carb Cycling Structure:
- High carb days: Schedule on intense training days
- Moderate carb days: Schedule on moderate training days
- Low carb days: Schedule on rest days or light activity days

Focus on quality carb sources: whole grains, fruits, vegetables, and legumes. Time most of your carbs around your workouts when your body can use them most efficiently.`,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80'
  },
  {
    id: 4,
    title: 'Pre and Post Workout Nutrition',
    category: 'recovery',
    description: 'Optimal food choices before and after exercise to fuel performance and recovery.',
    content: `What you eat before and after workouts significantly impacts your performance, recovery, and results.

Pre-Workout Nutrition (1-3 hours before):
- Easily digestible carbs: oatmeal, banana, whole grain toast
- Moderate protein: Greek yogurt, protein shake, eggs
- Low fat to prevent slow digestion
- Example meal: Oatmeal with banana and whey protein

Post-Workout Nutrition (within 45 minutes):
- Fast-digesting carbs to replenish glycogen: white rice, potato, fruit
- Complete protein source: chicken, whey protein, eggs
- Example meal: Chicken with rice and vegetables or protein shake with banana`,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80'
  },
  {
    id: 5,
    title: 'Smart Meal Prep Strategies',
    category: 'general',
    description: 'Time-saving meal preparation tips to help you stay consistent with your nutrition goals.',
    content: `Consistent nutrition is often more important than perfect nutrition. Meal prepping helps you stay on track even during busy weeks.

Meal Prep Basics:
- Batch cook proteins: Prepare 2-3 protein sources weekly
- Prep versatile carbs: Rice, quinoa, sweet potatoes can be used in multiple meals
- Pre-cut vegetables for quick cooking or ready-to-eat snacks
- Prepare portable snacks: Hard-boiled eggs, Greek yogurt cups, protein bars

Time-Saving Tips:
- Use one-sheet pan meals - protein and vegetables roasted together
- Invest in quality containers that stack well in your fridge
- Label meals with dates to track freshness
- Keep a "grab and go" section in your fridge for busy mornings`,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80'
  },
  {
    id: 6,
    title: 'Superfoods for Energy Boost',
    category: 'general',
    description: 'Nutrient-dense foods that can help boost your energy levels naturally.',
    content: `Superfoods are nutrient powerhouses that pack large doses of antioxidants, polyphenols, vitamins, and minerals.

Top Energy-Boosting Superfoods:
- Quinoa: Complete protein with all essential amino acids
- Blueberries: High in antioxidants and fiber
- Spinach: Iron-rich for oxygen transport
- Chia seeds: Omega-3s and sustained energy
- Sweet potatoes: Complex carbs for steady energy

Include these foods in your daily diet for sustained energy throughout the day.`,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80'
  },
  {
    id: 7,
    title: 'Healthy Fats for Muscle Building',
    category: 'muscle-gain',
    description: 'Understanding the role of healthy fats in muscle growth and hormone production.',
    content: `Healthy fats play a crucial role in hormone production, including testosterone which is essential for muscle growth.

Best Sources of Healthy Fats:
- Avocados: Rich in monounsaturated fats
- Salmon: Omega-3 fatty acids for recovery
- Nuts & seeds: Almonds, walnuts, flaxseeds
- Olive oil: Anti-inflammatory properties
- Eggs: Complete nutrition package

Aim for 0.5-1g of fat per pound of body weight daily.`,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
  },
  {
    id: 8,
    title: 'Calorie Deficit Made Easy',
    category: 'weight-loss',
    description: 'Simple strategies to create a sustainable calorie deficit for weight loss.',
    content: `A calorie deficit is the foundation of weight loss. The key is making it sustainable without feeling deprived.

Practical Tips:
- Start with a 300-500 calorie deficit
- Fill half your plate with vegetables
- Use smaller plates for portion control
- Track your food for awareness
- Don't drink your calories

Focus on high-volume, low-calorie foods like vegetables, lean proteins, and fruits to stay full while cutting calories.`,
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80'
  },
  {
    id: 9,
    title: 'Sleep and Nutrition Connection',
    category: 'recovery',
    description: 'How your diet affects sleep quality and muscle recovery overnight.',
    content: `Quality sleep is when most muscle recovery happens. Your nutrition directly impacts sleep quality.

Sleep-Promoting Foods:
- Tart cherries: Natural melatonin
- Chamomile tea: Calming effects
- Almonds: Magnesium for relaxation
- Turkey: Tryptophan for sleepiness
- Kiwi: Serotonin production

Avoid caffeine 6+ hours before bed and heavy meals close to bedtime for optimal sleep quality.`,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80'
  },
  {
    id: 10,
    title: 'Plant-Based Protein Power',
    category: 'vegetarian',
    description: 'Complete guide to getting enough protein on a vegetarian diet for muscle building.',
    content: `Building muscle on a vegetarian diet is absolutely possible with the right protein sources.

Top Vegetarian Protein Sources:
- Paneer/Cottage Cheese: 18g per 100g
- Lentils (Dal): 9g per 100g cooked
- Chickpeas (Chana): 8g per 100g
- Greek Yogurt: 10g per 100g
- Tofu: 8g per 100g
- Quinoa: 4g per 100g (complete protein)
- Soy Milk: 7g per cup
- Tempeh: 19g per 100g

Tip: Combine legumes with grains (dal + rice) to get complete proteins with all essential amino acids.`,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80'
  },
  {
    id: 11,
    title: 'Iron-Rich Vegetarian Foods',
    category: 'vegetarian',
    description: 'Essential iron sources for vegetarians to maintain energy and prevent fatigue.',
    content: `Iron deficiency is common among vegetarians, but easily preventable with the right foods.

Best Vegetarian Iron Sources:
- Spinach & leafy greens: 2.7mg per 100g
- Pumpkin seeds: 8.8mg per 100g
- Fortified cereals: Up to 18mg per serving
- Kidney beans (Rajma): 2.9mg per 100g
- Dried apricots: 2.7mg per 100g
- Dark chocolate: 11.9mg per 100g

Pro Tip: Pair iron-rich foods with Vitamin C (lemon, orange) to increase absorption by up to 6x!`,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80'
  },
  {
    id: 12,
    title: 'Complete Vegetarian Meal Plans',
    category: 'vegetarian',
    description: 'Balanced meal ideas that provide all nutrients for fitness enthusiasts.',
    content: `A well-planned vegetarian diet can fuel any fitness goal. Here are complete meal ideas:

Breakfast Options:
- Oatmeal with banana, nuts, and soy milk
- Paneer paratha with curd
- Moong dal chilla with chutney

Lunch Ideas:
- Rajma chawal with salad
- Chole with brown rice and raita
- Vegetable pulao with dal

Dinner Suggestions:
- Palak paneer with roti
- Mixed dal khichdi with vegetables
- Grilled tofu with quinoa

Snacks: Greek yogurt, roasted chana, fruit smoothies, peanut butter toast`,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80'
  }
];
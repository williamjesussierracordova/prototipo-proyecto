import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import clancy from '../assets/clancy_tour.jpg';

const cards = [
    {
        Image: clancy,
        title: 'THE CLANCY TOUR',
        description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: clancy,
        title: 'THE CLANCY TOUR',
        description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    }
]

export default function cards_carousel() {
    return (
        <div>
            {cards.map((card, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src={card.Image}
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{card.title}</Text>
                        <Badge color="pink">{card.badge}</Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        {card.description}
                    </Text>

                    <Button color="blue" fullWidth mt="md" radius="md">
                        {card.message_button}
                    </Button>
                </Card>
            ))}
        </div>
    );
}

//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//         <Card.Section>
//             <Image
//             src= {clancy}
//             height={160}
//             alt="Norway"
//             />
//         </Card.Section>

//         <Group justify="space-between" mt="md" mb="xs">
//             <Text fw={500}>Norway Fjord Adventures</Text>
//             <Badge color="pink">On Sale</Badge>
//         </Group>

//         <Text size="sm" c="dimmed">
//             With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//             activities on and around the fjords of Norway
//         </Text>

//         <Button color="blue" fullWidth mt="md" radius="md">
//             Book classic tour now
//         </Button>
//     </Card>
//   );
// }
import React from 'react';
import {View} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

export const BaseCard = () => {
  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </Card>
  );
};

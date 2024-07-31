import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

interface IBaseCard {
  title?: string;
  bgColor?: string;
  children: React.ReactNode;
}

export const BaseCard = ({title, children, bgColor}: IBaseCard) => {
  return (
    <Card style={[styles.container, {backgroundColor: bgColor}]}>
      {title && <Card.Title title="Card Title" subtitle="Card Subtitle" />}
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

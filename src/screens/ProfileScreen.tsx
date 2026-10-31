import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Divider, List, Text } from 'react-native-paper';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.header}>
        <Card.Content style={styles.headerContent}>
          <Avatar.Text size={64} label="AG" />
          <View style={styles.headerText}>
            <Text variant="headlineSmall">Ana García</Text>
            <Text variant="bodyMedium" style={styles.muted}>
              Ciencia de la Computación
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title title="Datos personales" />
        <Card.Content>
          <List.Item
            title="ana.garcia@utec.edu.pe"
            description="Email"
            left={props => <List.Icon {...props} icon="email" />}
          />
          <Divider />
          <List.Item
            title="20 años"
            description="Edad"
            left={props => <List.Icon {...props} icon="cake-variant" />}
          />
          <Divider />
          <List.Item
            title="+51 987 654 321"
            description="Teléfono"
            left={props => <List.Icon {...props} icon="phone" />}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained">Editar perfil</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { marginBottom: 16 },
  headerContent: { flexDirection: 'row', alignItems: 'center' },
  headerText: { marginLeft: 16, flex: 1 },
  muted: { color: '#666', marginTop: 4 },
});

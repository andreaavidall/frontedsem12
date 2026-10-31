import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Divider, List, Switch, Text } from 'react-native-paper';

export function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        ⚙️ Configuración
      </Text>

      <Card>
        <Card.Content>
          <List.Item
            title="Notificaciones"
            description="Recibir avisos de cursos y notas"
            right={() => (
              <Switch value={notifications} onValueChange={setNotifications} />
            )}
          />
          <Divider />
          <List.Item
            title="Modo oscuro"
            description="Usar el tema oscuro de la app"
            right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Acerca de</Text>
          <Text variant="bodyMedium" style={styles.about}>
            UTEC Mobile v1.0.0 — CS2031 Desarrollo Basado en Plataformas
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { marginBottom: 16 },
  card: { marginTop: 16 },
  about: { marginTop: 8, color: '#666' },
});

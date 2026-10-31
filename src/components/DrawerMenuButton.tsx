import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

// Botón de menú para abrir el Drawer desde los headers que están
// dentro del Bottom Tab / Stack (donde el header del Drawer no se muestra).
export function DrawerMenuButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      accessibilityLabel="Abrir menú"
    >
      <Ionicons name="menu" size={24} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { paddingHorizontal: 16, paddingVertical: 4 },
});

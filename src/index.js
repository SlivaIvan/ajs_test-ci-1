export default function showsHealth(characters) {
  if (characters.health < 15) {
    return 'critical';
  } if (characters.health <= 50) {
    return 'wounded';
  }
  return 'healthy';
}
showsHealth({ name: 'Маг', health: 90 });

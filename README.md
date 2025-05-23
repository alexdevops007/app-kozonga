# Kozonga

**Kozonga** est une application mobile Expo/React Native destinée à la diaspora congolaise pour organiser des « retours aux sources » en RDC : itinéraires personnalisés, guides locaux vérifiés, check-lists pratiques et réservations intégrées.

---

## Points forts

- **Planification intelligente** : génération et édition d’itinéraires sur carte  
- **Réservation & paiement** : guides, transports et packages via Stripe/PayPal  
- **Communauté & chat** : mise en relation voyageurs ↔ guides et entre voyageurs  
- **Outils pratiques** : check-list, taux de change live, alertes sécurité  
- **Offline** : cache des cartes et fiches pour voyager sans réseau fiable  

---

## Tech Stack

- **Frontend** : Expo / React Native (TypeScript)  
- **Navigation** : React Navigation (Stack & Bottom Tabs)  
- **State** : Zustand  
- **API** : Axios  
- **Cartographie** : react-native-maps  
- **Notifications** : expo-notifications  
- **i18n** : i18n-js + expo-localization  

---

## ⚙️ Installation

1. Cloner le dépôt  
   ```bash
   git clone https://github.com/<orga>/kozonga-frontend.git
   cd kozonga-frontend
   ```
2. Installer les dépendances  
   ```bash
   npm install
   ```
3. Lancer l’app  
   ```bash
   npm run start
   ```
4. Scanner le QR avec **Expo Go** (Android/iOS) ou  
   ```bash
   npm run ios   # simulateur iOS
   npm run android
   ```

---

## Licence

Distribué sous licence **0BSD**. Voir [`LICENSE`](LICENSE) pour plus de détails.  
```
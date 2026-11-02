# EduLink — Backend

Backend du projet EduLink : **NestJS (REST)** + **Firebase** (Firestore, Authentication, Cloud Messaging).

Dépôt companion du mobile Flutter — un module NestJS par domaine fonctionnel.

## Domaines fonctionnels (un module NestJS chacun)

| Domaine | Périmètre | Collections Firestore |
|---|---|---|
| users | Comptes, rôles, profils, badges | `users` · `badges` · `user_badges` · `invite_codes` |
| courses | Cours, chapitres, contenu, progression | `courses` · `chapters` · `enrollments` |
| forum | Questions, réponses, réactions | `posts` · `replies` · `reactions` |
| evaluations | Quiz, dépôts, documents, notes | `quizzes` · `quiz_attempts` · `assignments` · `submissions` · `documents` |
| marketplace | Offres, réservations, commandes, avis | `offers` · `availabilities` · `orders` · `reviews` · `favorites` · `reports` · `conversations` · `messages` |

## Stack

- **NestJS** (REST) + SDK **firebase-admin**
- **Firebase Firestore** comme base de données, **Firebase Authentication** (e-mail/mot de passe + Google)
- **Cloudinary** pour les médias, **FCM** pour les notifications push

## Branches de travail

- `main` — branche d'intégration (protection à activer)
- `cours` — branche de travail du module Cours
- une branche par domaine, même convention que le dépôt mobile

## Démarrage

```bash
npm install
cp .env.example .env    # renseigner les clés du projet Firebase
npm run start:dev       # http://localhost:3000
```

## Point de santé

- `GET /` → état du service et liste des modules actifs

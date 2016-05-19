/*
To tell our accounts system that we want users to log-in via a username, we simply add an
Accounts.ui config block

By adding the accounts package, Meteor has created a special new collection, which can be
accessed at Meteor.users . To see it, open your browser console and type

Note that you can
also get the currently logged-in user with Meteor.user()

Yet we never set up any kind of user publication. So how come we can even see any user data at
all?
The answer is that the accounts package actually does “auto-publish” the currently logged in
user’s basic account details no matter what. If it didn’t, then that user could never log in to the site!
The accounts package only publishes the current user though. This explains why one user can’t see
another’s account details.
So the publication is only publishing one user object per logged-in user (and none when you are
not logged in).

*/

Accounts.ui.config({
passwordSignupFields: 'USERNAME_ONLY'
});
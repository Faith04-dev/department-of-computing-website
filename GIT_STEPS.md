# Git and GitHub Assignment Steps

Run these commands in a terminal opened inside this project folder. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your own GitHub details.

## 1. Initialise the repository and record the first version
```bash
git init
git status
git add .
git commit -m "Create initial department website"
git log --oneline
```

If Git asks for your identity, configure it once:
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## 2. Make a homepage improvement and commit it
Edit `index.html` (for example, change the welcome paragraph to include your institution's name), then run:
```bash
git status
git add index.html
git commit -m "Improve homepage introduction"
git log --oneline
```

## 3. Create a branch for the Contact Us page
The project already contains a starter `contact.html`. Create a branch and make a visible improvement to the page while on that branch, such as adding your official office hours or updating the sample contact details.
```bash
git switch -c feature/contact-page
git status
```
After editing `contact.html`:
```bash
git add contact.html
git commit -m "Complete contact page"
```

## 4. Merge the branch into the main branch
```bash
git switch main
git merge feature/contact-page
git log --oneline --graph --all
git branch
```
If your initial branch is named `master` instead of `main`, use `master` in the commands above.

## 5. Create a GitHub repository and push your project
1. Sign in at https://github.com/
2. Create a **new empty repository** (do not add a README, licence, or .gitignore because these are already in the project).
3. Copy the repository URL, then run the commands below from your project folder:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
If your main branch is named `master`, push `master` instead.

## 6. Make another change after uploading, commit, and push
Edit a file, for example add a short sentence to `about.html`, then:
```bash
git status
git add about.html
git commit -m "Update department information"
git push
```

## Important concepts for the report
- **Commit:** saves a snapshot of staged changes in your local Git repository.
- **Push:** uploads local commits to a remote repository such as GitHub.
- A commit can exist on your computer without appearing on GitHub until you push it.

## Evidence screenshots to take
- Website homepage in a browser.
- About Us, Programmes, and Contact Us pages.
- `git log --oneline` showing at least three commits.
- `git branch` or `git log --oneline --graph --all` showing the feature branch and merge.
- The GitHub repository page showing the uploaded project files.
- `git status` after the final push.

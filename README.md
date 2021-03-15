# jekyll-page.github.io

### Install

https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll

```
git clone https://git.p2p.legal/dig/jekyll-page.github.io.git
git remote rename origin template
git remote add origin <your github repo>
```


### Development

https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll  
`bundle add webrick`  
`bundle exec jekyll serve`  

```
git checkout dev # -b
git commit ...
```


### Publish

```
git checkout main
git merge dev
git push origin main
```

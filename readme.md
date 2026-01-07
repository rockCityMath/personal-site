To develop:

- Navigate to /src 
- Run 'sass --watch .:.'
- In another terminal in /src run 'live-server'

That will keep the css updated based on the scss and will host the site locally.

To deploy:
- Delete /dist
- Copy /src into /dist
- Git add and commit (.gitignore will ignore the scss files in /dist)
- Git push direct to main (as is best practice)

Once something new has been pushed to /dist, the cloudflare worker will deploy it. 


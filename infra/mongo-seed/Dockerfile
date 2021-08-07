FROM mongo

WORKDIR /app

COPY experience.json .

COPY project.json .

CMD mongoimport --host=mongodb --username=admin --password=password --authenticationDatabase=admin --db=test --collection=experience --file=experience.json --jsonArray && mongoimport --host=mongodb --username=admin --password=password --authenticationDatabase=admin --db=test --collection=project --file=project.json --jsonArray

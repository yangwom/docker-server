

# Requisitos
 
## 1 - Criar o Dockerfile e docker-compose corretamente

<details>
  <summary>Termine a implementação do Dockerfile em <code>src/db/Dockerfile</code></summary><br />

Este Dockerfile deve utilizar uma imagem do SQL Server e expor a porta 1433. Também será necessário configurar a senha da pessoa usuária `SA` igual a: `Password12`.

</details>

<details>
  <summary>Termine a implementação do arquivo <code>src/docker-compose.yml</code></summary><br />

Este `docker-compose` deve criar um serviço a partir do arquivo `src/db/Dockerfile` que expõe a porta `1433`.

O nome do serviço deve ser `db`
  
O nome do container deve ser `sql_server_db`.

</details>


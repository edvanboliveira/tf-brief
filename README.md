🚀 tf-brief

Uma ferramenta simples para resumir planos do Terraform e facilitar a leitura das mudanças com mais rapidez e clareza.

📌 Sobre

O Terraform fornece um output de plan bastante verboso e detalhado, o que pode dificultar uma visão rápida das alterações na infraestrutura.

O tf-brief não substitui essa visualização nativa, ele a complementa, oferecendo um resumo simplificado para facilitar a compreensão inicial do impacto do plano.

Em cenários onde é necessário mais profundidade, o output original do Terraform ainda é essencial para análise detalhada.

imagem de uso#######

⚙️ Requisitos

Node.js instalado

📦 Instalação do tf-brief

npm install -g tf-brief@latest

🚀 Exemplo de Usabilidade

terraform plan -out=plano

tf-brief plano

resultado

📄 Licença

MIT

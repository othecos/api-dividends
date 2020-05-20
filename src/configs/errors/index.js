export const getErrorMessage = (code) => {
    return ERRORS_CODE[code]
}
export const getErrorCode = (code) => {
    return code ? code : 500
}
export const ERRORS_MESSAGE = {
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    NOT_FOUND: 'Not Found',
    FORBIDDEN: 'Forbidden',
    UNAUTHORIZED: 'Unauthorized',
    CONFLICT: 'Conflict',
    BAD_REQUEST: 'Bad Request'
}
export const ERRORS_CODE = {
    500: ERRORS_MESSAGE.INTERNAL_SERVER_ERROR,
    404: ERRORS_MESSAGE.NOT_FOUND,
    403: ERRORS_MESSAGE.FORBIDDEN,
    401: ERRORS_MESSAGE.UNAUTHORIZED,
    409: ERRORS_MESSAGE.CONFLICT,
    400: ERRORS_MESSAGE.BAD_REQUES
}
export const getFirebaseErrors = (error) => {
    if(Number.isInteger(error)){
        return {
            code: error,
            message: getErrorMessage(error)
        }
    }else{
        return FIRABSE_ERRORS[error] ? FIRABSE_ERRORS[error] : {code: 500, message: getErrorMessage(500)}
    }
}

export const FIRABSE_ERRORS = {
    "auth/claims-too-large": {
        message: "O payload de declarações fornecido para setCustomUserClaims() excede o tamanho máximo permitido de 1.000 bytes.",
        code: 400
    },
    "auth/id-token-expired": {
        message: "O token de código do Firebase provisionado expirou.",
        code: 401
    },
    "auth/id-token-revoked": {
        message: "O token de código do Firebase foi revogado.",
        code: 403
    },
    "auth/argument-error": {
        message: "Parametro deve ser um array",
        code: 400
    },
    "auth/invalid-argument": {
        message: "Um argumento inválido foi fornecido a um método do Authentication. A mensagem de erro precisa conter informações adicionais.",
        code: 400
    },
    "auth/invalid-claims": {
        message: "Os atributos de declaração personalizados fornecidos para setCustomUserClaims() são inválidos.",
        code: 400
    },
    "auth/invalid-continue-uri": {
        message: "O URL de confirmação precisa ser uma string de URL válida.",
        code: 400
    },
    "auth/invalid-creation-time": {
        message: "O horário da criação precisa ser uma string de data UTC válida.",
        code: 400
    },
    "auth/invalid-disabled-field": {
        message: "O valor fornecido para a propriedade do usuário disabled é inválido. Precisa ser um valor booleano.",
        code: 400
    },
    "auth/invalid-display-name": {
        message: "O valor fornecido para a propriedade do usuário displayName é inválido. Precisa ser uma string não vazia.",
        code: 400
    },
    "auth/invalid-dynamic-link-domain": {
        message: "O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.",
        code: 400
    },
    "auth/invalid-email-verified": {
        message: "O valor fornecido para a propriedade do usuário emailVerified é inválido. Precisa ser um valor booleano.",
        code: 400
    },
    "auth/invalid-email": {
        message: "O valor fornecido para a propriedade do usuário email é inválido. Precisa ser um endereço de e-mail de string.",
        code: 400
    },
    "auth/invalid-hash-algorithm": {
        message: "O algoritmo de hash precisa corresponder a uma das strings na lista de algoritmos compatíveis.",
        code: 400
    },
    "auth/invalid-hash-block-size": {
        message: "O tamanho do bloco de hash precisa ser um número válido.",
        code: 400
    },
    "auth/invalid-hash-derived-key-length": {
        message: "O tamanho da chave derivada do hash precisa ser um número válido.",
        code: 400
    },
    "auth/invalid-hash-key": {
        message: "A chave de hash precisa ter um buffer de byte válido.",
        code: 400
    },
    "auth/invalid-hash-memory-cost": {
        message: "O custo da memória hash precisa ser um número válido.",
        code: 400
    },
    "auth/invalid-hash-parallelization": {
        message: "O carregamento em paralelo do hash precisa ser um número válido.",
        code: 400
    },
    "auth/invalid-hash-rounds": {
        message: "O arredondamento de hash precisa ser um número válido.",
        code: 400
    },
    "auth/invalid-hash-salt-separator": {
        message: "O campo do separador de 'salt' do algoritmo de geração de hash precisa ser um buffer de byte válido.",
        code: 400
    },
    "auth/invalid-id-token": {
        message: "O token de código informado não é um token de código do Firebase válido.",
        code: 401
    },
    "auth/invalid-last-sign-in-time": {
        message: "O último horário de login precisa ser uma string de data UTC válida.",
        code: 400
    },
    "auth/invalid-page-token": {
        message: "O token de próxima página fornecido em listUsers() é inválido. Precisa ser uma string não vazia válida.",
        code: 400
    },
    "auth/invalid-password": {
        message: "O valor fornecido para a propriedade do usuário password é inválido. Precisa ser uma string com pelo menos seis caracteres.",
        code: 401
    },
    "auth/invalid-password-hash": {
        message: "O hash da senha precisa ser um buffer de byte válido.",
        code: 400
    },
    "auth/invalid-password-salt": {
        message: "O 'salt' da senha precisa ser um buffer de byte válido",
        code: 400
    },
    "auth/invalid-phone-number": {
        message: "O valor fornecido para phoneNumber é inválido. Ele precisa ser uma string de identificador compatível com o padrão E.164 não vazio.",
        code: 400
    },
    "auth/invalid-photo-url": {
        message: "O valor fornecido para a propriedade do usuário photoURL é inválido. Precisa ser um URL de string.",
        code: 400
    },
    "auth/invalid-provider-data": {
        message: "O providerData precisa ser uma matriz válida de objetos UserInfo.",
        code: 400
    },
    "auth/invalid-provider-id": {
        message: "O providerId precisa ser uma string de identificador de provedor compatível válida.",
        code: 400
    },
    "auth/invalid-session-cookie-duration": {
        message: "A duração do cookie da sessão precisa ser um número válido em milissegundos entre 5 minutos e 2 semanas.",
        code: 400
    },
    "auth/invalid-uid": {
        message: "O uid fornecido precisa ser uma string não vazia com no máximo 128 caracteres.",
        code: 400
    },
    "auth/invalid-user-import": {
        message: "O registro do usuário a ser importado é inválido.",
        code: 500
    },
    "auth/maximum-user-count-exceeded": {
        message: "O número máximo permitido de usuários a serem importados foi excedido.",
        code: 500
    },
    "auth/missing-android-pkg-name": {
        message: "Um nome de pacote Android precisa ser fornecido para a instalação do app Android.",
        code: 400
    },
    "auth/missing-continue-uri": {
        message: "Um URL de confirmação válido precisa ser fornecido na solicitação.",
        code: 400
    },
    "auth/missing-hash-algorithm": {
        message: "É necessário fornecer o algoritmo de geração de hash e seus parâmetros para importar usuários com hashes de senha.",
        code: 400
    },
    "auth/missing-ios-bundle-id": {
        message: "A solicitação está sem o ID do pacote do iOS.",
        code: 400
    },
    "auth/missing-uid": {
        message: "Um identificador uid é necessário para a operação atual.",
        code: 400
    },
    "auth/reserved-claims": {
        message: "Uma ou mais declarações de usuário personalizadas fornecidas para setCustomUserClaims() são reservadas. Por exemplo, não use as declarações específicas do OIDC, como sub, iat, iss, exp, aud, auth_time etc., como chaves para declarações personalizadas.",
        code: 403
    },
    "auth/session-cookie-expired": {
        message: "O cookie da sessão do Firebase fornecido expirou.",
        code: 403
    },
    "auth/session-cookie-revoked": {
        message: "O cookie da sessão do Firebase foi revogado.",
        code: 403
    },
    "auth/uid-already-exists": {
        message: "O uid fornecido já está sendo usado por um usuário existente. É necessário que cada usuário tenha um uid exclusivo.",
        code: 409
    },
    "auth/unauthorized-continue-uri": {
        message: "O domínio da URL de confirmação não está na lista de permissões. Acesse o Console do Firebase para colocar o domínio na lista de permissões.",
        code: 403
    },
    "auth/email-already-exists": {
        message: "O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.",
        code: 409
    },
    "auth/user-not-found": {
        message: "Não há registro de usuário existente correspondente ao identificador fornecido.",
        code: 404
    },
    "auth/operation-not-allowed": {
        message: "O provedor de login fornecido está desativado para o projeto do Firebase. Ative-o na seção Método de login do Console do Firebase.",
        code: 403
    },
    "auth/invalid-credential": {
        message: "A credencial usada para autenticar os SDKs Admin não pode ser usada para executar a ação desejada. Determinados métodos de autenticação, como createCustomToken() e verifyIdToken(), requerem que o SDK seja inicializado com uma credencial de certificado em oposição a um token de atualização ou uma credencial padrão do aplicativo. Consulte Inicializar o SDK para ver a documentação sobre como autenticar os Admin SDKs com uma credencial de certificado.",
        code: 403
    },
    "auth/phone-number-already-exists": {
        message: "O phoneNumber fornecido já está sendo usado por um usuário existente. É necessário que cada usuário tenha um phoneNumber exclusivo.",
        code: 409
    },
    "auth/project-not-found": {
        message: "Nenhum projeto do Firebase foi encontrado com a credencial usada para inicializar os Admin SDKs. Consulte Configurar um projeto do Firebase para ver a documentação sobre como gerar uma credencial para seu projeto e usá-la na autenticação dos Admin SDKs.",
        code: 404
    },
    "auth/insufficient-permission": {
        message: "A credencial usada para inicializar o Admin SDK não tem permissão para acessar o recurso solicitado do Authentication. Consulte Configurar um projeto do Firebase para ver a documentação sobre como gerar uma credencial com as permissões apropriadas e usá-la na autenticação dos Admin SDKs.",
        code: 403,
    },
    "auth/internal-error": {
        message: "O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação. A mensagem de erro incluirá a resposta do servidor de autenticação com informações adicionais. Se o erro persistir, informe o problema ao nosso canal de suporte de Relatório do bug.",
        code: 500
    },
}
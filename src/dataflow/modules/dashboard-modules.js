// Action Types
const ADD_NEW_DOCUMENT = 'osc/documents/ADD_NEW_DOCUMENTS';
const DELETE_DOCUMENT = 'osc/documents/DELETE_DOCUMENT';

// Initial State
const initialState = {
	documentsList: [
		// {
		// 	id: 1,
		// 	title: 'Modelo Estatuto Associação',
		// 	description: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc.',
		// 	file: '',
		// },
		// {
		// 	id: 2,
		// 	title: 'Modelo Estatuto para Grupo de capoeira',
		// 	description: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc. 3 Modelo Estatuto Fundação Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público. 4 Modelo Estatuto Associação Organização da Sociedade Civil de Interesse Público (OSCIP). documentação básica de associação, cumprindo as exigências da Lei nº 9.790/1999 para qualificação como OSCIP. 5 Modelo Ata Assembleia de Constituição Associação Modelo de ata de Assembleia específica para constituição de Associação, com a aprovação do estatuto e eleição dos cargos diretivos. 6 Modelo Ata Assembleia Geral Associação Modelo de ata de Assembleia Geral de Associação, que poderá ser adaptado e utilizado em diversos contextos, para qualquer pauta. 7 Modelo Registro Público Constituição Fundação Modelo de Escritura Pública de Registro de constituição de Fundação. Atentar para as exigências e rotinas dos cartórios competentes.',
		// 	file: '',
		// },
		// {
		// 	id: 3,
		// 	title: 'Modelo Estatuto Fundação',
		// 	description: 'Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público.',
		// 	file: '',
		// },
	],
	tableDatas: [
		{
			id: 1,
			organization: 'Instituto PrecisaSer',
			cpf: '000.000.000-00',
			user: 'Jorge Amado da Silva',
			email: 'organização@email.com',
			telephone: '(11)11111-1111',
			createdIn: '19/05/19',
			authorization: '-',
			dueDate: '-',
			status: 'pendente',
			admin:
			{
				name: 'Jorge Amado da Silva',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Instituto PrecisaSer',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 2,
			organization: 'Vai na Web',
			cpf: '000.000.000-00',
			user: 'Yasmin Miranda',
			email: 'nome@email.com',
			telephone: '(99) 99999-9999',
			createdIn: '18/06/19',
			authorization: '-',
			dueDate: '-',
			status: 'isento',
			admin:
			{
				name: 'Yasmin Miranda',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Instituto PrecisaSer',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 3,
			organization: 'Casa de Rui Barbosa',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(77)77777-7777',
			createdIn: '17/06/19',
			authorization: '02/06/19',
			dueDate: '02/07/19',
			status: '',
			admin:
			{
				name: 'Alice Barbosa Souza',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Casa de Rui Barbosa',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 4,
			organization: 'Biblioteca da Maré',
			cpf: '000.000.000-00',
			user: 'Vinicius Almeida Rodrigues',
			email: 'organização@email.com',
			telephone: '(22)22222-2222',
			createdIn: '15/06/19',
			authorization: '15/07/19',
			dueDate: '-',
			status: '',
			admin:
			{
				name: 'Vinicius Almeida Rodrigues',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Biblioteca da Maré',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 5,
			organization: 'Museu de Arte ZO',
			cpf: '000.000.000-00',
			user: 'Tarcila do Amaral Gonçalves',
			email: 'organização@email.com',
			telephone: '(44)44444-4444',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Tarcila do Amaral Gonçalves',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Museu de Arte ZO',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 6,
			organization: 'Instituto Tamar',
			cpf: '000.000.000-00',
			user: 'Aline Candido Mendes',
			email: 'organização@email.com',
			telephone: '(55)55555-5555',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Aline Candido Mendes',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Instituto Tamar',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 7,
			organization: 'Projeto Vida',
			cpf: '000.000.000-00',
			user: 'Ronaldo Veiga de Almeida',
			email: 'organização@email.com',
			telephone: '(66)66666-6666',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Ronaldo Veiga de Almeida',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Projeto Vida',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 8,
			organization: 'Mais Brasil',
			cpf: '000.000.000-00',
			user: 'Ana Claudia Ferrari Silva',
			email: 'organização@email.com',
			telephone: '(77)77777-7777',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Ana Claudia Ferrari Silva',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Mais Brasil',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 9,
			organization: 'Pela Vida',
			cpf: '000.000.000-00',
			user: 'Marcio Rodrigues Alves',
			email: 'organização@email.com',
			telephone: '(88)88888-8888',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Marcio Rodrigues Alves',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Pela Vida',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 10,
			organization: 'Casa azul',
			cpf: '000.000.000-00',
			user: 'João Marcos Barbosa',
			email: 'organização@email.com',
			telephone: '(99)99999-9999',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'João Marcos Barbosa',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Casa azul',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 11,
			organization: 'Coletivo Denegrir',
			cpf: '000.000.000-00',
			user: 'Caroline Perreira',
			email: 'organização@email.com',
			telephone: '(21)23659-8799',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Caroline Perreira',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Coletivo Denegrir',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 12,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Alice Barbosa Souza',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Crianças Felizes',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 12,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Alice Barbosa Souza',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Crianças Felizes',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
		{
			id: 12,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: '',
			admin:
			{
				name: 'Alice Barbosa Souza',
				rg: '12.526.759-3',
				dateOfBirth: '10/10/10',
				fantasyName: 'Vai na Web',
				reasonSocial: 'Crianças Felizes',
				cnpj: '00.000.000/0000-00',
				address: 'Rua Gomes Lopes',
				complement: 'Casa',
				neighborhood: 'Santa Teresa',
				cep: '20241-410',
				city: 'Rio de Janeiro',
			},
		},
	],
};

// Reducers
export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_NEW_DOCUMENT:
		return Object.assign({}, state, {
			documentsList: [
				...state.documentsList,
				{
					...action.info,
				},
			],
		});
	case DELETE_DOCUMENT:
		return Object.assign({}, state, {
			...state,
			documentsList: state.documentsList.filter(item => item.id !== action.info),
		});
	default: return state;
	}
}

// Action Creators
export const addNewDocument = info => ({
	type: ADD_NEW_DOCUMENT,
	info,
});
export const deleteDocument = info => ({
	type: DELETE_DOCUMENT,
	info,
});

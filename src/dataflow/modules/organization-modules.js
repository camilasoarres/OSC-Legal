// Action Types
const UPDATE_TABLEDATAS = 'osc/organization/UPDATE_TABLEDATAS';

// Initial State
const initialState = {
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
			status: 'Isento',
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
			status: 'Pago',
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
			status: 'pendente',
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
			status: 'Vencido',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			status: 'autorizar',
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
			id: 13,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 14,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 15,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 16,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 17,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 18,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 19,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 20,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
			id: 21,
			organization: 'Crianças Felizes',
			cpf: '000.000.000-00',
			user: 'Alice Barbosa Souza',
			email: 'organização@email.com',
			telephone: '(21)98956-7856',
			createdIn: '12/06/19',
			authorization: '15/06/19',
			dueDate: '15/07/19',
			status: 'autorizar',
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
	case UPDATE_TABLEDATAS:
		return Object.assign({}, state, {
			tableDatas: action.info,
		});
	default: return state;
	}
}

// Action Creators
export const updateTableDatas = info => ({
	type: UPDATE_TABLEDATAS,
	info,
});
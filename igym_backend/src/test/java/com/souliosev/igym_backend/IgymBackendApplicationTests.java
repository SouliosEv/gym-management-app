package com.souliosev.igym_backend;

import com.souliosev.igym_backend.controller.ClientController;
import com.souliosev.igym_backend.model.Client;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


@SpringBootTest
@AutoConfigureMockMvc
class IgymBackendApplicationTests {

	@MockBean
	private ClientController clientController;
	@Autowired
	private MockMvc mockMvc;

	@Test
	public void testGetAllClients() throws Exception {
		Client client1 = new Client();
		Client client2 = new Client();

		List<Client> mockClients = new ArrayList<Client>();
		mockClients.add(client1);
		mockClients.add(client2);
		when(clientController.getAllClients()).thenReturn(new ResponseEntity<>(mockClients, HttpStatus.OK));//???

		mockMvc.perform(get("/clients"))
				.andExpect(status().isOk())
				.andExpect( content().contentType("application/json"))
				.andExpect( jsonPath("$", hasSize(2)));

		verify(clientController, times(1)).getAllClients();
	}

	@Test
	public void testDeleteClient() throws Exception {
		Long clientId = 1L;
		doReturn(ResponseEntity.ok(true)).when(clientController).delete(clientId);
		mockMvc.perform(delete("/clients/{clientId}", clientId))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$").value(true));

		verify(clientController).delete(clientId);
	}

	@Test
	public void testCreateClient() throws Exception{
		Client client = new Client();
		client.setClientId(2L);
		client.setName("Paddy Pimblett");
		client.setEmail("paddyTheBuddy@gmail.com");
		client.setMobileNumber("6919235912");
		String jsonPayload = new ObjectMapper().writeValueAsString(client);


		when(clientController.create(client)).thenReturn(new ResponseEntity<>(client,HttpStatus.CREATED));

		MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.post("/clients/create")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonPayload);

		ResultActions resultActions = mockMvc.perform(builder).andDo(print())
				.andExpect(status().isCreated())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.name").value(client.getName()))
				.andExpect(jsonPath("$.email").value(client.getEmail()));

		verify(clientController).create(client);

	}

	@Test
	public void testUpdateClient() throws Exception {
		Client updatedClient = new Client();
		updatedClient.setClientId(2L);
		updatedClient.setName("Updated Paddy Pimblett");
		updatedClient.setEmail("updatedPaddyTheBuddy@gmail.com");
		updatedClient.setMobileNumber("2222222222");
		String updatePayload = new ObjectMapper().writeValueAsString(updatedClient);

		when(clientController.update(updatedClient)).thenReturn(new ResponseEntity<>(updatedClient,HttpStatus.OK));

		MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.put("/clients/update/2")
				.contentType(MediaType.APPLICATION_JSON)
				.content(updatePayload);

		ResultActions resultActions = mockMvc.perform(builder).andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.name").value(updatedClient.getName()))
				.andExpect(jsonPath("$.email").value(updatedClient.getEmail()));

		verify(clientController).update(updatedClient);
	}
}

package com.souliosev.igym_backend;

import com.souliosev.igym_backend.model.Client;
import com.souliosev.igym_backend.service.ClientService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class IgymBackendApplicationTests {

	@MockBean
	private ClientService clientService;


	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext webApplicationContext;
	@Before
	public void setUp() {
		this.mockMvc = webAppContextSetup(webApplicationContext).build();

	}

	@Test
	public void testGetAllClients() throws Exception {
		Client client1 = new Client();
		client1.setClientId(1L);
		client1.setName("client 1");
		client1.setEmail("client1@gmail.com");
		client1.setMobileNumber("6999999999");
		client1.setCreatedAt(LocalDateTime.now());
		client1.setUpdatedAt(LocalDateTime.now());
		Client client2 = new Client();
		client2.setClientId(2L);
		client2.setName("client 2");
		client2.setEmail("client1@gmail.com");
		client2.setMobileNumber("6999999999");
		client2.setCreatedAt(LocalDateTime.now());
		client2.setUpdatedAt(LocalDateTime.now());

		// Arrange
		List<Client> mockClients = new ArrayList<Client>();
		mockClients.add(client1);
		mockClients.add(client2);
		System.out.println(mockClients.get(0).getClientId());
		when(clientService.getAll()).thenReturn(mockClients);

		// Act
		mockMvc.perform(get("/clients"))
				.andExpect(status().isOk())
				.andExpect((ResultMatcher) content().contentType(MediaType.APPLICATION_JSON))
				.andExpect((ResultMatcher) jsonPath("$", hasSize(2)))
				.andExpect(MockMvcResultMatchers.request().asyncResult(clientService.getAll()));

        // Assert
		verify(clientService, times(1)).getAll();
	}

}

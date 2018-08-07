package com.pjp.bandmanapi.model;

import javax.persistence.*;

@Entity
public class LoginUser {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String emailAddress;
	private String password;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "band_id", referencedColumnName = "id")
	private Band band;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Band getBand() {
		return band;
	}

	public void setBand(Band band) {
		this.band = band;
	}
}

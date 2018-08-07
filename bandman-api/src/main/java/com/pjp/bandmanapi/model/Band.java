package com.pjp.bandmanapi.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "band")
public class Band {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String info;
	private String facebookLink;
	private String youtubeLink;
	private String twitterLink;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "band_id", referencedColumnName = "id")
	@JsonManagedReference
	private List<BandMember> bandMembers;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getFacebookLink() {
		return facebookLink;
	}

	public void setFacebookLink(String facebookLink) {
		this.facebookLink = facebookLink;
	}

	public String getYoutubeLink() {
		return youtubeLink;
	}

	public void setYoutubeLink(String youtubeLink) {
		this.youtubeLink = youtubeLink;
	}

	public String getTwitterLink() {
		return twitterLink;
	}

	public void setTwitterLink(String twitterLink) {
		this.twitterLink = twitterLink;
	}

	public List<BandMember> getBandMembers() {
		return bandMembers;
	}

	public void setBandMembers(List<BandMember> bandMembers) {
		this.bandMembers = bandMembers;
	}
}

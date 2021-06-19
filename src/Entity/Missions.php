<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MissionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=MissionsRepository::class)
 */
class Missions
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $codeName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\OneToMany(targetEntity=Agents::class, mappedBy="missions", orphanRemoval=true)
     */
    private $agentMission;

    /**
     * @ORM\OneToMany(targetEntity=Contacts::class, mappedBy="missions", orphanRemoval=true)
     */
    private $contactMission;

    /**
     * @ORM\OneToMany(targetEntity=Targets::class, mappedBy="missions", orphanRemoval=true)
     */
    private $targetMission;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $missionType;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\ManyToMany(targetEntity=Stashs::class, inversedBy="missions")
     */
    private $stashMission;

    /**
     * @ORM\Column(type="date")
     */
    private $startDate;

    /**
     * @ORM\Column(type="date")
     */
    private $endDate;

    /**
     * @ORM\OneToOne(targetEntity=Specialties::class, inversedBy="missions", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $specialtieMission;

    public function __construct()
    {
        $this->agentMission = new ArrayCollection();
        $this->contactMission = new ArrayCollection();
        $this->targetMission = new ArrayCollection();
        $this->stashMission = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCodeName(): ?string
    {
        return $this->codeName;
    }

    public function setCodeName(string $codeName): self
    {
        $this->codeName = $codeName;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * @return Collection|Agents[]
     */
    public function getAgentMission(): Collection
    {
        return $this->agentMission;
    }

    public function addAgentMission(Agents $agentMission): self
    {
        if (!$this->agentMission->contains($agentMission)) {
            $this->agentMission[] = $agentMission;
            $agentMission->setMissions($this);
        }

        return $this;
    }

    public function removeAgentMission(Agents $agentMission): self
    {
        if ($this->agentMission->removeElement($agentMission)) {
            // set the owning side to null (unless already changed)
            if ($agentMission->getMissions() === $this) {
                $agentMission->setMissions(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Contacts[]
     */
    public function getContactMission(): Collection
    {
        return $this->contactMission;
    }

    public function addContactMission(Contacts $contactMission): self
    {
        if (!$this->contactMission->contains($contactMission)) {
            $this->contactMission[] = $contactMission;
            $contactMission->setMissions($this);
        }

        return $this;
    }

    public function removeContactMission(Contacts $contactMission): self
    {
        if ($this->contactMission->removeElement($contactMission)) {
            // set the owning side to null (unless already changed)
            if ($contactMission->getMissions() === $this) {
                $contactMission->setMissions(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Targets[]
     */
    public function getTargetMission(): Collection
    {
        return $this->targetMission;
    }

    public function addTargetMission(Targets $targetMission): self
    {
        if (!$this->targetMission->contains($targetMission)) {
            $this->targetMission[] = $targetMission;
            $targetMission->setMissions($this);
        }

        return $this;
    }

    public function removeTargetMission(Targets $targetMission): self
    {
        if ($this->targetMission->removeElement($targetMission)) {
            // set the owning side to null (unless already changed)
            if ($targetMission->getMissions() === $this) {
                $targetMission->setMissions(null);
            }
        }

        return $this;
    }

    public function getMissionType(): ?string
    {
        return $this->missionType;
    }

    public function setMissionType(string $missionType): self
    {
        $this->missionType = $missionType;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|Stashs[]
     */
    public function getStashMission(): Collection
    {
        return $this->stashMission;
    }

    public function addStashMission(Stashs $stashMission): self
    {
        if (!$this->stashMission->contains($stashMission)) {
            $this->stashMission[] = $stashMission;
        }

        return $this;
    }

    public function removeStashMission(Stashs $stashMission): self
    {
        $this->stashMission->removeElement($stashMission);

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getSpecialtieMission(): ?Specialties
    {
        return $this->specialtieMission;
    }

    public function setSpecialtieMission(Specialties $specialtieMission): self
    {
        $this->specialtieMission = $specialtieMission;

        return $this;
    }
}
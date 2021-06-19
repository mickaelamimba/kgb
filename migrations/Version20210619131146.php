<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210619131146 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agents (id INT AUTO_INCREMENT NOT NULL, missions_id INT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, birth_date DATE NOT NULL, indentification_code BIGINT NOT NULL, nationality VARCHAR(255) NOT NULL, INDEX IDX_9596AB6E17C042CF (missions_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contacts (id INT AUTO_INCREMENT NOT NULL, missions_id INT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, birth_date DATE NOT NULL, code_name VARCHAR(255) NOT NULL, nationality VARCHAR(255) NOT NULL, INDEX IDX_3340157317C042CF (missions_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE missions (id INT AUTO_INCREMENT NOT NULL, specialtie_mission_id INT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, code_name VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, mission_type VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, UNIQUE INDEX UNIQ_34F1D47E7B1B5F17 (specialtie_mission_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE missions_stashs (missions_id INT NOT NULL, stashs_id INT NOT NULL, INDEX IDX_47F51B5217C042CF (missions_id), INDEX IDX_47F51B52EE826336 (stashs_id), PRIMARY KEY(missions_id, stashs_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE specialties (id INT AUTO_INCREMENT NOT NULL, agents_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_410754B0709770DC (agents_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stashs (id INT AUTO_INCREMENT NOT NULL, code BIGINT NOT NULL, address VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE targets (id INT AUTO_INCREMENT NOT NULL, missions_id INT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, birth_date DATE NOT NULL, code_name VARCHAR(255) NOT NULL, nationality VARCHAR(255) NOT NULL, INDEX IDX_AF431E1317C042CF (missions_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE agents ADD CONSTRAINT FK_9596AB6E17C042CF FOREIGN KEY (missions_id) REFERENCES missions (id)');
        $this->addSql('ALTER TABLE contacts ADD CONSTRAINT FK_3340157317C042CF FOREIGN KEY (missions_id) REFERENCES missions (id)');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47E7B1B5F17 FOREIGN KEY (specialtie_mission_id) REFERENCES specialties (id)');
        $this->addSql('ALTER TABLE missions_stashs ADD CONSTRAINT FK_47F51B5217C042CF FOREIGN KEY (missions_id) REFERENCES missions (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE missions_stashs ADD CONSTRAINT FK_47F51B52EE826336 FOREIGN KEY (stashs_id) REFERENCES stashs (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE specialties ADD CONSTRAINT FK_410754B0709770DC FOREIGN KEY (agents_id) REFERENCES agents (id)');
        $this->addSql('ALTER TABLE targets ADD CONSTRAINT FK_AF431E1317C042CF FOREIGN KEY (missions_id) REFERENCES missions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE specialties DROP FOREIGN KEY FK_410754B0709770DC');
        $this->addSql('ALTER TABLE agents DROP FOREIGN KEY FK_9596AB6E17C042CF');
        $this->addSql('ALTER TABLE contacts DROP FOREIGN KEY FK_3340157317C042CF');
        $this->addSql('ALTER TABLE missions_stashs DROP FOREIGN KEY FK_47F51B5217C042CF');
        $this->addSql('ALTER TABLE targets DROP FOREIGN KEY FK_AF431E1317C042CF');
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47E7B1B5F17');
        $this->addSql('ALTER TABLE missions_stashs DROP FOREIGN KEY FK_47F51B52EE826336');
        $this->addSql('DROP TABLE agents');
        $this->addSql('DROP TABLE contacts');
        $this->addSql('DROP TABLE missions');
        $this->addSql('DROP TABLE missions_stashs');
        $this->addSql('DROP TABLE specialties');
        $this->addSql('DROP TABLE stashs');
        $this->addSql('DROP TABLE targets');
    }
}
